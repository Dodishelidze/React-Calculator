import React from "react";

const ResetButton = ({ reset }) => {
  return (
    <div className="resetbutton-div">
      <button className="resetbutton" onClick={reset}>
        RESET
      </button>
    </div>
  );
};

export default ResetButton;
