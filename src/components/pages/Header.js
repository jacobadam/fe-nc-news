import React from "react";
import { Link } from "@reach/router";

const Header = props => {
  const { username } = props;
  return (
    <div>
      <h1>NC-NEWS-HEADER</h1>
      <h2>Logged in as {username} </h2>
      <Link to="/">
        <button>Homepage</button>
      </Link>
      <Link to="/articles">
        <button>Articles</button>
      </Link>
      <Link to="/topics">
        <button>All Topics</button>
      </Link>
      <Link to="/topics/coding">
        <button>Coding</button>
      </Link>
      <Link to="/topics/football">
        <button>Football</button>
      </Link>
      <Link to="/topics/cooking">
        <button>Cooking</button>
      </Link>
    </div>
  );
};

export default Header;
