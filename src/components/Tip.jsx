import React from "react";
import Button from "./Button";
import CustomInput from "./CustomInput";

const Tip = ({ changetip, buttons, changeCustomInput, customTip }) => {
  return (
    <>
      <div>
        <p className="tip" style={{ marginBottom: "0px" }}>
          Select Tip %
        </p>
      </div>
      <div>
        <div className="buttonlist">
          {buttons.map((button) => (
            <Button
              key={button.id}
              changetip={changetip}
              active={button.active}
              value={button.value}
              id={button.id}
            />
          ))}
          <CustomInput
            changeCustomInput={changeCustomInput}
            customTip={customTip}
          />
        </div>
      </div>
    </>
  );
};

export default Tip;
