import React from 'react';
// import { Router } from '@reach/router';
// import Header from './Header';
import Articles from './Articles';

const Homepage = () => {
  return (
    <div>
      <h1>WELCOME TO THE HOMEPAGE</h1>
      <Articles/>
    </div>
  );
};

// Homepage should show articles component with a few changes (most popular + only show top 5 + sort by votes)

export default Homepage;