import React from 'react';
import { Link } from "@reach/router";
import VotesUpdater from "../FunctionalComponents/VotesUpdater"
import CommentPoster from "../FunctionalComponents/CommentPoster";

const CommentCard = props => {
  //comment_id
  const { article_id, author, votes, created_at, body } = props
  return (
    <div className="commentCard" key={article_id}>
      <Link to={`/users/${author}`}>
        <h2>{author}</h2>
      </Link>
      <h2>Created: {new Date(created_at).toLocaleString()}</h2>
      <h2>{body}</h2>
      <CommentPoster username={props.username} article_id={article_id} />
      <VotesUpdater votes={votes} article_id={article_id} />
    </div>
  );
};

export default CommentCard;