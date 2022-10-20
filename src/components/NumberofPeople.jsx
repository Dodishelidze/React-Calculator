import React from "react";
import PersonSvg from "./PersonSvg";

const NumberofPeople = ({ people, peopleChange }) => {
  return (
    <div className="number-people">
      <p className="nummberofpeople">Number of People</p>
      <PersonSvg />
      <input
        className="input"
        value={!people ? "" : people}
        type="text"
        onChange={(e) => {
          peopleChange(e.currentTarget.value);
        }}
      ></input>
    </div>
  );
};

export default NumberofPeople;
