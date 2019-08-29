import React, { Component } from "react";
import * as api from "../../../api"
import ErrorPage from "../FunctionalComponents/ErrorPage"
import { Link } from "@reach/router";
import VotesUpdater from "../FunctionalComponents/VotesUpdater"
import CommentPoster from "../FunctionalComponents/CommentPoster"

class SingleArticle extends Component {
  state = {
    isLoading: true,
    article: null,
    error: null
  };

  render() {
    const { isLoading, article, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <ErrorPage error={error} />;

    const { title, body, votes, topic, comment_count, created_at, author, article_id } = article;

    return (
      <div>
        <Link to={`/topics/${topic}`}>
          <p>{topic}</p>
        </Link>
        <h1>{title}</h1>
        <Link to={`/users/${author}`}>
          <p>{author}</p>
        </Link>
        <p>{body}</p>
        <p>Created: {new Date(created_at).toLocaleString()}</p>
        <Link to={`/articles/${article_id}/comments`}>
          <p>comments: {comment_count}</p>
        </Link>
        <CommentPoster username={this.props.username} article_id={article_id} />
        <VotesUpdater votes={votes} article_id={article_id} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchSingleArticle();
  }

  fetchSingleArticle() {
    const { article_id } = this.props;
    api
      .getSingleArticle(article_id)
      .then(article => {
        this.setState({ article, isLoading: false, error: null });
      })
      .catch(err => {
        this.setState({
          error: {
            msg: err.response.data.msg,
            status: err.response.status
          },
          isLoading: false
        });
      });
  }
}

export default SingleArticle;
