import React from "react";
import PersonSvg from "./PersonSvg";

const NumberofPeople = ({ people, peopleChange }) => {
  return (
    <div className="number-people">
      <p className="nummberofpeople">Number of People</p>
      <PersonSvg />
      <input
        className="input"
        type="number"
        value={!people ? "" : people}
        onChange={(e) => {
          if (e.currentTarget.value < 0) {
            return;
          }
          peopleChange(e.currentTarget.value);
        }}
      ></input>
    </div>
  );
};

export default NumberofPeople;
