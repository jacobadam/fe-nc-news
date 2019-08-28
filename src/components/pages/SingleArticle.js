import React, { Component } from "react";
import * as api from "../../api";
import ErrorPage from "./ErrorPage";

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

    const { title, body, votes, topic, comment_count, created_at } = article;

    return (
      <div>
        <h1>{title}</h1>
        <p>topic: {topic}</p>
        <p>{body}</p>
        <p>created: {created_at}</p>
        <p>comments: {comment_count}</p>
        <p>votes: {votes}</p>
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
