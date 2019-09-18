import React from "react";
import { Link } from "@reach/router";
import VotesUpdater from "../FunctionalComponents/VotesUpdater";

const CommentCard = props => {
  const {
    article_id,
    author,
    votes,
    created_at,
    body,
    comment_id,
    removeComment,
    username
  } = props;

  return (
    <div className="custom-card" key={article_id}>
      <Link to={`/users/${author}`}>
      <h2 className="singleArticleTextCommentAuthor">{author}</h2>
      </Link>
      <h2 className="singleArticleTextComment">
        Created: {new Date(created_at).toLocaleString()}
      </h2>
      <h2 className="singleArticleTextComment">{body}</h2>
      <VotesUpdater
        author={author}
        username={username}
        votes={votes}
        article_id={article_id}
        comment_id={comment_id}
      />
      {author === username && (
        <button
          className="btn btn-secondary"
          type="submit"
          onClick={() => removeComment(comment_id)}
        >
          Delete Comment!
        </button>
      )}
    </div>
  );
};

export default CommentCard;
