import React from "react";
import { Link } from "@reach/router";
import VotesUpdater from "../FunctionalComponents/VotesUpdater";

const ArticleCard = props => {
  const {
    article_id,
    title,
    author,
    topic,
    votes,
    comment_count,
    created_at
  } = props.article;

  const { username } = props;

  return (
    <div className="card-group">
      <div className="card">
        <div className="card-body">
          <p>Topic: </p>
          <Link to={`/topics/${topic}`}>
            <p>{topic}</p>
          </Link>
          <Link to={`/articles/${article_id}`}>
            <p>{title}</p>
          </Link>
          <h4>
            Created by:
            <Link to={`/users/${author}`}>
              <p>{author}</p>
            </Link>
            On: {new Date(created_at).toLocaleString()}
          </h4>
          <Link to={`/articles/${article_id}/comments`}>
            <p>comments: {comment_count}</p>
          </Link>
          <VotesUpdater
            author={author}
            username={username}
            votes={votes}
            article_id={article_id}
          />
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
