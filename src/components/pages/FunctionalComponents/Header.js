import React from "react";
import { Link } from "@reach/router";

const Header = props => {
  const { username } = props;
  return (
    <div className="headerBar">
      <h3>
        <span className="ncnewsLogo">NC NEWS</span>
        <br />
        <br />
      </h3>
      {username ? (
        <h2 className="loggedIn">
          Logged in as <Link to={`/users/${username}`}> {username} </Link>
        </h2>
      ) : (
        <h2 className="loggedIn">Not logged in :(</h2>
      )}

      <Link to="/" className="button1">
        Home
      </Link>
      <Link to="/articles" className="button1">
        All Articles
      </Link>
      <Link to="/topics" className="button1">
        All Topics
      </Link>
      <Link to="/topics/coding" className="button1">
        Coding
      </Link>
      <Link to="/topics/football" className="button1">
        Football
      </Link>
      <Link to="/topics/cooking" className="button1">
        Cooking
      </Link>
    </div>
  );
};

export default Header;
