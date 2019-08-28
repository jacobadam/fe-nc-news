import React from 'react';
// import { Router } from '@reach/router';
// import Header from './Header';
import Articles from "./ArticlesComponents/Articles"

const Homepage = () => {
  return (
    <div>
      <h2 className="homepageHeader">WELCOME TO THE HOMEPAGE</h2>
      <Articles/>
    </div>
  );
};

// Homepage should show articles component with a few changes (most popular + only show top 5 + sort by votes)

export default Homepage;