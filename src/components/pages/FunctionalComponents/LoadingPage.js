import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const LoadingPage = () => {
  return (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingPage;
