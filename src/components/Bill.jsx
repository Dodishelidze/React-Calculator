import React from "react";
import DollarSvg from "./DollarSvg";

const Bill = ({ bill, change }) => {
  return (
    <>
      <p className="bill">Bill</p>
      <div className="billMain">
        <DollarSvg />
        <input
          className="input"
          value={!bill ? "" : bill}
          onChange={(e) => {
            change(e.currentTarget.value);
          }}
        ></input>
      </div>
    </>
  );
};

export default Bill;
