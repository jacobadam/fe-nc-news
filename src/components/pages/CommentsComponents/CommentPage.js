import React, { Component } from 'react';
import * as api from "../../../api";
import CommentCard from './CommentCard'


class CommentPage extends Component {
  state = {
    isLoading: true,
    comments: null,
    error: null
  };

  render() {
    const { isLoading, comments, error } = this.state;

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error!!!</p>;

    return (
      <main className="commentsContainer">
        <section className="commentsList">
          {comments.map(comment => {
            return <CommentCard {...comment} key={comment.comment_id} />;
          })}
        </section>
      </main>
    );
  }

  componentDidMount() {
    this.fetchAllComments();
  }

  fetchAllComments() {
    const {article_id} = this.props
    api.getComments(article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }
}

export default CommentPage;