import React, { useState } from "react";

const Button = ({ value, changetip, active, id }) => {
  return (
    <div>
      <button
        id={id}
        className={active == true ? "button" : "active"}
        value={value}
        onClick={(e) => {
          changetip(e);
        }}
      >
        {value}%
      </button>
    </div>
  );
};

export default Button;
