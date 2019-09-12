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

export default Homepage;
