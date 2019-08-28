import React from "react";
import { Link } from "@reach/router";
import VotesUpdater from "../VotesUpdater"

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
  return (
    <div className="articleCard">
      <Link to={`/topics/${topic}`}>
        <p>{topic}</p>
      </Link>
      <Link to={`/articles/${article_id}`}>
        <p>{title}</p>
      </Link>
      <Link to={`/users/${author}`}>
        <p>{author}</p>
      </Link>
      <p>Created: {new Date(created_at).toLocaleString()}</p>
      <Link to={`/articles/${article_id}/comments`}>
        <p>comments: {comment_count}</p>
      </Link>
      <VotesUpdater votes={votes} article_id={article_id} />
    </div>
  );
};

export default ArticleCard;
