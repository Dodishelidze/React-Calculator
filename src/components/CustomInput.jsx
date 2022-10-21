import React from "react";

const CustomInput = ({ changeCustomInput, customTip }) => {
  return (
    <div>
      <input
        type="text"
        className="custominput"
        placeholder="Custom"
        onChange={(e) => {
          changeCustomInput(e.currentTarget.value);
        }}
        value={customTip ? customTip : ""}
      ></input>
    </div>
  );
};

export default CustomInput;
