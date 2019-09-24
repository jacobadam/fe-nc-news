import React, { Component } from "react";
import * as api from "../../../api";

class CommentPoster extends Component {
  state = {
    username: "",
    body: ""
  };

  render() {
    const { username } = this.props;
    const { body } = this.state;
    return (
      <form className="commentPoster"onSubmit={this.handleSubmit}>
        <label>
          <input
            value={body}
            type="text"
            required
            name="body"
            onChange={this.handleChange}
          />
        </label>
        {username && (
          <button className="button4" >add comment!</button>
        )}
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
    this.setState({ username: "", body: "" });
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
