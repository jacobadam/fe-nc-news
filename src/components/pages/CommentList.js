import React, { Component } from 'react';
import * as api from "../../api";


class CommentList extends Component {
  state = {
    isLoading: true,
    comments: null,
    error: null
  };

  render() {
    const { isLoading, comments, error } = this.state;

    return <div />;
  }

  componentDidMount() {
    this.fetchAllComments();
  }

  fetchAllComments() {
    api.getTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  }
}

export default CommentList;