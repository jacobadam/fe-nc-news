import React from 'react';
import { Link } from '@reach/router'

const TopicCard = props => {
  const { slug, description } = props
  console.log()
  return (
    <div>
      <Link to={`/topics/${slug}`}>
      <h1>{slug}</h1>
      </Link>
      <p>{description}</p>
    </div>
  );
};

export default TopicCard;