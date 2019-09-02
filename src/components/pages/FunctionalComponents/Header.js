import React from "react";
import { Link } from "@reach/router";

const Header = props => {
  const { username } = props;
  return (
    <div className="headerBar">
      <h3>
        <span className="badge badge-secondary">NC NEWS</span>
      </h3>
      {username ? (
        <h2 className="loggedIn">Logged in as {username}</h2>
      ) : (
        <h2 className="loggedIn">Not logged in :(</h2>
      )}

      <Link to="/">
        <button type="button" className="btn btn-outline-primary">
          Home
        </button>
      </Link>
      <Link to="/articles">
        <button type="button" className="btn btn-outline-secondary">
          Articles
        </button>
      </Link>
      <Link to="/topics">
        <button type="button" className="btn btn-outline-success">
          All Topics
        </button>
      </Link>
      <Link to="/topics/coding">
        <button type="button" className="btn btn-outline-danger">
          Coding
        </button>
      </Link>
      <Link to="/topics/football">
        <button type="button" className="btn btn-outline-warning">
          Football
        </button>
      </Link>
      <Link to="/topics/cooking">
        <button type="button" className="btn btn-outline-info">
          Cooking
        </button>
      </Link>
    </div>
  );
};

export default Header;
