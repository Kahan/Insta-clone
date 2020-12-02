import React from "react";

export const Filler = ({ percentage }) => {
  return <div className="filler" style={{ width: `${percentage}%` }}></div>;
};

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress__bar">
      <Filler percentage={percentage} />
    </div>
  );
};

export default ProgressBar;
