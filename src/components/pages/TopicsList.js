import React, { Component } from "react";
import * as api from "../../api";
import TopicCard from "./TopicCard";

class TopicsList extends Component {
  state = {
    isLoading: true,
    topics: null,
    error: null
  };
  render() {
    const { isLoading, topics, error } = this.state;

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error!!!</p>;

    return (
      <main className="topicsContainer">
        <section className="topicsList">
          {topics.map(topic => {
            return <TopicCard {...topic} key={topic.slug} />;
          })}
        </section>
      </main>
    );
  }

  componentDidMount() {
    this.fetchAllTopics();
  }


  fetchAllTopics() {
    api.getTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  }
}

export default TopicsList;
