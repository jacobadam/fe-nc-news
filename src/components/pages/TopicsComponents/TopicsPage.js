import React from "react";
import TopicsList from "./TopicsList";

const TopicPage = ({ topic }) => {
  return (
    <>
      <h2 className="topicsPage" height="200%">
        {topic}
      </h2>
      <TopicsList topic={topic} />
    </>
  );
};

export default TopicPage;
