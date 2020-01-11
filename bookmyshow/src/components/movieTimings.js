import React from "react";
import "./movieTimings.css";

const movieTimings = props => {
  const { timings } = props;

  const value = timings.map(time => <div className="movietime">{time}</div>);
  return value;
};

export default movieTimings;
