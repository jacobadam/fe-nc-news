import React, { Component } from "react";
import * as api from "../../api";

class SingleArticle extends Component {
  state = {
    isLoading: true,
    article: null,
    error: null
  };

  render() {
    const { isLoading, article, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error!!!</p>;

    const { title, body, votes, topic } = article;

    return (<div>
      <h1>{title}</h1>
      <p>{topic}</p>
      <p>{body}</p>
      <p>{votes}</p>
    </div> 
    )
  }

  componentDidMount() {
    this.fetchSingleArticle();
  }

  fetchSingleArticle() {
    const { article_id } = this.props
    api.getSingleArticle(article_id).then(article => {
      console.log(article, "MY article");
      this.setState({ article, isLoading: false });
    });
  }
}

export default SingleArticle;
