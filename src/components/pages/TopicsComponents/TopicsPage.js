import React from "react";
import TopicsList from "./TopicsList";

const TopicPage = ({ topic }) => {
  return (
    <main>
      <h2 className="topicsPage" height="200%"
    >{topic}</h2>
      <TopicsList topic={topic} />
    </main>
  );
};

export default TopicPage;
