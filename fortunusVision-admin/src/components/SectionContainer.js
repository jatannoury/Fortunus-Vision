import React from "react";

const SectionContainer = ({ children, label }) => {
  return (
    <div class="dropdown">
      <div className="center">{children}</div>
      <div class="dropdown-content">
        <p>{label}</p>
      </div>
    </div>
  );
};

export default SectionContainer;
