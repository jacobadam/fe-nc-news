import React from "react";
import { Link } from "@reach/router";
import CommentCard from "./CommentCard";

const ArticleCard = props => {
  const {
    article_id,
    title,
    author,
    topic,
    votes,
    comment_count
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
      <Link to={`/articles/${article_id}/comments`}>
      <p>comments: {comment_count}</p>
      </Link>
      <p>votes: {votes}</p>
      <CommentCard />
      {/* <button onClick={this.props.handleIncrement}>UpVote</button>
      <button onClick={this.props.handleDecrement}>DownVote</button> */}
    </div>
  );

};

  //  this.handleIncrement() {
  //   // console.log();
  // }

  // this.handleDecrement() {}

export default ArticleCard;
