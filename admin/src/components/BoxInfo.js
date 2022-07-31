import React from "react";

const BoxInfo = ({ number }) => {
  return (
    <div className="box">
      <span className="content">{number}</span>
    </div>
  );
};

export default BoxInfo;
