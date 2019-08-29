import React from "react";
import { Link } from "@reach/router";

const Header = props => {
  const { username } = props;
  return (
    <div className="headerBar">
      <h1>NC-NEWS</h1>
      <h2 className="loggedIn">Logged in as {username}</h2>
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
