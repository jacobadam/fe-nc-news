import React from "react";
import { Link } from "@reach/router";

const ArticleCard = props => {
  const { article_id, title, author, topic, votes } = props.article;
  return (
    <div className="articleCard">
      <Link to={`/topics/${topic}`}>
        <p>{topic}</p>
      </Link>
      <Link to={`/articles/${article_id}`}>
        <p>{title}</p>
      </Link>
      {/* <p>{title}</p> */}
      <Link to={`/users/${author}`}>
        <p>{author}</p>
      </Link>
      <p>{votes}</p>
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
