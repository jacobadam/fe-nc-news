import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <>
      <h2>
        {error.status} {error.msg}
      </h2>
    </>
  );
};

export default ErrorPage;
