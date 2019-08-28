import React from 'react';
import { Link } from "@reach/router";

const CommentCard = props => {
  //comment_id
  const { article_id, author, votes, created_at, body } = props
  return (
    <div className="commentCard" key={article_id}>
      <Link to={`/users/${author}`}>
        <h2>{author}</h2>
      </Link>
      <h2>Created: {created_at}</h2>
      <h2>{body}</h2>
      <h2>Votes: {votes}</h2>
    </div>
  );
};

export default CommentCard;