import React from 'react';
import { Link } from '@reach/router'

const TopicCard = props => {
  const { slug, description } = props
  return (
    <div>
      <Link to={`/topics/${slug}`}>
      <h2>{slug}</h2>
      </Link>
      <p>{description}</p>
    </div>
  );
};

export default TopicCard;