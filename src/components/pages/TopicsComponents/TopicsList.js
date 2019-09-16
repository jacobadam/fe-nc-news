import React, { Component } from "react";
import * as api from "../../../api";
import TopicCard from "./TopicCard";
import LoadingPage from "../FunctionalComponents/LoadingPage";
import ErrorPage from "../FunctionalComponents/ErrorPage";

class TopicsList extends Component {
  state = {
    isLoading: true,
    topics: null,
    error: null
  };

  render() {
    const { isLoading, topics, error } = this.state;

    if (isLoading) return <LoadingPage />;
    if (error) return <ErrorPage error={error} />;

    return (
      <main className="custom-container">
        <h2 className="allTopicsHeader">All Topics</h2>
        {topics.map(topic => {
          return <TopicCard {...topic} key={topic.slug} />;
        })}
      </main>
    );
  }

  componentDidMount() {
    this.fetchAllTopics();
  }

  fetchAllTopics() {
    api
      .getTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false });
      })
      .catch(err => {});
  }
}

export default TopicsList;
