import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <div>
      <h1>NC-NEWS-HEADER</h1>
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
