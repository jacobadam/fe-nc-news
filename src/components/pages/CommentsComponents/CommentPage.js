import React, { Component } from "react";
import * as api from "../../../api";
import CommentCard from "./CommentCard";
import CommentPoster from "../FunctionalComponents/CommentPoster";
// import { navigate } from "@reach/router";

class CommentPage extends Component {
  state = {
    isLoading: true,
    comments: null,
    error: null
  };

  render() {
    const { isLoading, comments, error } = this.state;
    const { article_id } = this.props;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error!!!</p>;

    return (
      <main className="commentsContainer">
        <section className="commentsList">
          <CommentPoster
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
    api.getComments(article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }

  addComment = comment => {
    console.log(comment, "sdads");
    this.setState();
    // set state [comment, ...comments]
    //pass down to CommentPoster and invoke in correct place
  };

  removeComment = comment_id => {
    api.deleteComment(comment_id);
  };
}

export default CommentPage;
