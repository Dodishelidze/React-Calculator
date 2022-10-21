import React from "react";
import Bill from "./Bill";
import Tip from "./Tip";
import ResetButton from "./ResetButton";
import NumberofPeople from "./NumberofPeople";
import AmountPerPerson from "./AmountPerPerson";
import PercPerPerson from "./PercPerPerson";
import CustomInput from "./CustomInput";

const Container = ({
  bill,
  change,
  changetip,
  buttons,
  amountPerPerson,
  percPerPerson,
  people,
  peopleChange,
  reset,
  changeCustomInput,
  customTip,
}) => {
  return (
    <div className="cont">
      <div className="main-container">
        <div className="row ">
          <div className="col-6 top">
            <Bill bill={bill} change={change} />
            <Tip
              changetip={changetip}
              buttons={buttons}
              changeCustomInput={changeCustomInput}
              customTip={customTip}
            />
            <NumberofPeople people={people} peopleChange={peopleChange} />
          </div>
          <div className="col-6 bottom">
            <div className="inside-cont">
              <AmountPerPerson amountPerPerson={amountPerPerson} />
              <PercPerPerson percPerPerson={percPerPerson} />
              <ResetButton reset={reset} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
