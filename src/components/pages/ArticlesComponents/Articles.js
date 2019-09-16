import React, { Component } from "react";
import * as api from "../../../api";
import ArticleCard from "./ArticleCard";
import { Router } from "@reach/router";
import SingleArticle from "./SingleArticle";
import Sorter from "../FunctionalComponents/Sorter";
import LoadingPage from "../FunctionalComponents/LoadingPage";
import ErrorPage from "../FunctionalComponents/ErrorPage";

class Articles extends Component {
  state = {
    isLoading: true,
    articles: null,
    error: null
  };

  render() {
    const { isLoading, articles, error } = this.state;

    if (isLoading) return <LoadingPage />;
    if (error) return <ErrorPage error={error} />;

    const { topic } = this.props;

    return (
      <main className="custom-container">
        <Sorter fetchAllArticles={this.fetchAllArticles} />

        {topic && <h2 className="allTopicsHeader">Topics for {topic}</h2>}
        {!topic && <h2 className="allTopicsHeader">All Articles</h2>}
        {articles.map(article => {
          return (
            <ArticleCard
              article={article}
              username={this.props.username}
              key={article.article_id}
            />
          );
        })}
        <Router className="articleInfo">
          <SingleArticle path="/:article_id" />
        </Router>
      </main>
    );
  }

  componentDidMount() {
    this.fetchAllArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchAllArticles();
    }
  }

  fetchAllArticles = (sort_by, order) => {
    const { topic } = this.props;
    api
      .getArticles({ topic, sort_by, order })
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({
          error: {
            msg: "topic does not exist!",
            status: ""
          },
          isLoading: false
        });
      });
  };
}

export default Articles;
