import React from "react";

const PercPerPerson = ({ percPerPerson }) => {
  return (
    <div className="result">
      <h1 className="ammount1">
        Total <br />
        <br />
        <span className="per">/ person</span>
      </h1>
      <h1 className="tipresult">${!percPerPerson ? 0 : percPerPerson}</h1>
    </div>
  );
};

export default PercPerPerson;
