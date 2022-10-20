import React from "react";

const AmountPerPerson = ({ amountPerPerson }) => {
  return (
    <div className="result">
      <h1 className="ammount">
        Tip Amount <br />
        <br />
        <span className="per">/ person</span>
      </h1>
      <h1 className="tipresult">${!amountPerPerson ? 0 : amountPerPerson}</h1>
    </div>
  );
};

export default AmountPerPerson;
