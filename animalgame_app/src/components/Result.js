import React from "react";

const Result = ({ result }) => {
  return <h2 className={`result ${result.toLowerCase()}`}>{result}</h2>;
};

export default Result;
