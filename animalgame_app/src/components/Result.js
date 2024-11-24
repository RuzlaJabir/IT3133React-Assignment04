import React from "react";
import '../assets/css/compo.css';

const Result = ({ result }) => {
  return <h2 className={`result ${result.toLowerCase()}`}>{result}</h2>;
};

export default Result;
