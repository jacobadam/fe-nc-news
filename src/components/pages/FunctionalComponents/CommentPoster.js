import React, { Component } from "react";
import * as api from "../../../api";

class CommentPoster extends Component {
  state = {
    username: "",
    body: ""
  };

  render() {
    const { username } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <input
            type="text"
            required
            name="body"
            onChange={this.handleChange}
          />
        </label>
        {username && <button>add comment!</button>}
      </form>
    );
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addComment();
  };

  addComment = () => {
    const { article_id, username } = this.props;
    const { body } = this.state;
    api.postComment(username, body, article_id).then(comment => {
      this.props.addNewComment(comment);
    });
  };
}

export default CommentPoster;
