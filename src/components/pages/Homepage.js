import React from "react";
import Articles from "./ArticlesComponents/Articles";

const Homepage = props => {
  const { username } = props;

  return (
    <div>
      <h3 className="homepageHeader">WELCOME TO THE HOMEPAGE</h3>
      <Articles username={username} />
    </div>
  );
};

// Homepage should show articles component with a few changes (most popular + only show top 5 + sort by votes)

export default Homepage;
