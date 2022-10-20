import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import { useState, useRef, useEffect } from "react";

function App() {
  const [bill, setBill] = useState();
  const ChangeBill = (input) => {
    setBill(input);
  };
  const [amountPerPerson, setAmountPerPerson] = useState(0);
  const [percPerPerson, setPercPerPerson] = useState(0);
  const [people, setPeople] = useState();
  const tipPercent = useRef(0);
  const [customTip, setCustomTip] = useState();

  const reset = () => {
    const updateButtons = buttons.map((button) => {
      button.active = true;

      return button;
    });
    setButtons(updateButtons);

    setAmountPerPerson(0);
    setPercPerPerson(0);
    setPeople();
    setBill();
    tipPercent.current = 0;
  };
  ///comit
  const ChangeTipPercent = (e) => {
    setCustomTip();
    tipPercent.current = e.currentTarget.value;
    var tipo = parseInt(tipPercent.current);
    changeButtonState(e.target.getAttribute("id"));
    countTotal(bill, tipo, people);
  };

  const [buttons, setButtons] = useState([
    { id: 1, value: 5, active: true },
    { id: 2, value: 10, active: true },
    { id: 3, value: 15, active: true },
    { id: 4, value: 25, active: true },
    { id: 5, value: 50, active: true },
  ]);

  useEffect(() => {
    callbackFunction();
  }, [people, amountPerPerson, bill]);

  const callbackFunction = () => {
    const tipo = parseInt(tipPercent.current);
    countTotal(bill, tipo, people);
    countPerPercent();
  };

  const countPerPercent = () => {
    const r = parseInt(tipPercent.current) / people;
    const result = Math.round(r * 100) / 100;
    setPercPerPerson(result);
  };

  const peopleChange = (e) => {
    setPeople(e);
  };

  const changeButtonState = (id) => {
    const updateButtons = buttons.map((button) => {
      button.active = true;
      if (button.id == id) {
        return { ...button, active: !button.active };
      }
      return button;
    });
    setButtons(updateButtons);
  };

  const countTotal = (bill, tipo, people = 1) => {
    const r = bill / 100;
    const chooseTipPersent = r * tipo;
    const totalhere =
      (parseFloat(bill) + parseFloat(chooseTipPersent)) / people;
    const totalPerPerson = Math.round(totalhere * 100) / 100;
    setAmountPerPerson(totalPerPerson);
  };

  const changeCustomInput = (e) => {
    console.log("sss");
    setCustomTip(e);
    console.log(customTip);
    const updateButtons = buttons.map((button) => {
      button.active = true;
      return button;
    });
    setButtons(updateButtons);
    setCustomTip(e);
    tipPercent.current = e;
  };

  return (
    <div className="main-div">
      <Header />
      <Container
        changeCustomInput={changeCustomInput}
        reset={reset}
        bill={bill}
        change={ChangeBill}
        changetip={ChangeTipPercent}
        buttons={buttons}
        amountPerPerson={amountPerPerson}
        percPerPerson={percPerPerson}
        people={people}
        peopleChange={peopleChange}
        customTip={customTip}
      />
    </div>
  );
}

export default App;
