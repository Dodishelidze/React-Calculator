import React from "react";
import DollarSvg from "./DollarSvg";

const Bill = ({ bill, change }) => {
  return (
    <>
      <p className="bill">Bill</p>
      <div className="billMain">
        <DollarSvg />
        <input
          type="number"
          className="input"
          value={!bill ? "" : bill}
          min="0"
          onChange={(e) => {
            if (e.currentTarget.value < 0) {
              return;
            }
            change(e.currentTarget.value);
          }}
        ></input>
      </div>
    </>
  );
};

export default Bill;
