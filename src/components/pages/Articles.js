import React, { Component } from "react";
import * as api from "../../api";
import ArticleCard from "./ArticleCard";
import { Router } from "@reach/router";
import SingleArticle from "./SingleArticle";

class Articles extends Component {
  state = {
    isLoading: true,
    articles: null,
    error: null
  };

  render() {
    const { isLoading, articles, error } = this.state;

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error!!!</p>;

    return (
      <main className="articlesContainer">
        <section className="articlesList">
          <h2 className="articleHeader">Articles</h2>
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </section>
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

  fetchAllArticles() {
    const { topic } = this.props;
    api.getArticles(topic).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }

}

export default Articles;
