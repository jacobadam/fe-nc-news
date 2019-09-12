import React from "react";
import { Link } from "@reach/router";

const TopicCard = props => {
  const { slug, description } = props;
  return (
    <div className="card-group p-3">
      <div className="card w-75">
        <div className="card-body">
          <Link to={`/topics/${slug}`}>
            <h5 className="card-title">{slug}</h5>
          </Link>
          <p className="card-text">{description}</p>
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
