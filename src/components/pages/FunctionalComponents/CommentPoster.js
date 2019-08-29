import React, { Component } from "react";
import * as api from "../../../api"

class CommentPoster extends Component {
  state = {
    username: "",
    body: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <input type="text" name="body" onChange={this.handleChange} />
        </label>
        <button>add comment!</button>
      </form>
    );
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitting!");
    this.addComment();
  };

  addComment = () => {
    const { article_id, username } = this.props;
    const { body } = this.state;
    api.postComment(username, body, article_id).then(comment => {
      console.log(comment.data.comment.body, 'comment console')
      // this.setState(comment.data.comment.body, "");
    });
  };
}

export default CommentPoster;
