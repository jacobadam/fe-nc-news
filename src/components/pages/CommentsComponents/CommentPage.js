import React, { Component } from "react";
import * as api from "../../../api";
import CommentCard from "./CommentCard";
import CommentPoster from "../FunctionalComponents/CommentPoster";
import LoadingPage from "../FunctionalComponents/LoadingPage";
import ErrorPage from "../FunctionalComponents/ErrorPage";

class CommentPage extends Component {
  state = {
    isLoading: true,
    comments: null,
    error: null
  };

  render() {
    const { isLoading, comments, error } = this.state;
    const { article_id } = this.props;
    if (isLoading) return <LoadingPage />;
    if (error) return <ErrorPage error={error} />;

    return (
      <main className="commentsContainer">
        <section className="commentsList">
          <CommentPoster
            addNewComment={this.addNewComment}
            username={this.props.username}
            article_id={article_id}
          />
          {comments.map(comment => {
            return (
              <CommentCard
                addComment={this.addComment}
                removeComment={this.removeComment}
                username={this.props.username}
                {...comment}
                key={comment.comment_id}
              />
            );
          })}
        </section>
      </main>
    );
  }

  componentDidMount() {
    this.fetchAllComments();
  }

  fetchAllComments() {
    const { article_id } = this.props;
    api
      .getComments(article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
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

  addNewComment = comment => {
    this.setState(prevState => {
      return {
        comments: [comment, ...prevState.comments]
      };
    });
  };

  removeComment = comment_id => {
    api.deleteComment(comment_id);
    this.setState(({ comments }) => {
      return {
        comments: comments.filter(comment => comment.comment_id !== comment_id)
      };
    });
  };
}

export default CommentPage;
