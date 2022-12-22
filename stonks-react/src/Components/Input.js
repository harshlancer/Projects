import React, { useState } from "react";

export default function Input() {
  const [Ip, setIp] = useState(0);
  const [Qty, setQty] = useState(0);
  const [Curr, setCurr] = useState(0);
  const [meaning, setMeaning] = useState("Click Submit Button");

  function getIp(event) {
    var Input = event.target.value;
    setIp(Input);
  }

  function getQty(event) {
    var Quant = event.target.value;
    setQty(Quant);
  }

  function getCurr(event) {
    var Cp = event.target.value;
    setCurr(Cp);
  }

  function submitHandler() {
    PnL(Ip, Qty, Curr);
  }

  function getMeaninig(statement) {
    setMeaning(statement);
  }

  function PnL(Initial, Quantity, Current) {
    if (Initial > Current) {
      var loss = (Initial - Current) * Quantity;
      getMeaninig(`Cong On your loss of ${loss}`);
    } else if (Current > Initial) {
      var profit = (Current - Initial) * Quantity;
      getMeaninig(`Cong on you profit of ${profit}`);
    } else {
      getMeaninig("No loss No pro");
    }
  }

  return (
    <div id="inputs">
      <form>
        <label id="Initial">
          <h3>Initial Price</h3>
          <input
            onChange={getIp}
            type="text"
            name="Initail Price"
            placeholder="Enter Current Price"
          />
        </label>
        <label id="Quantity">
          <h3>Quantity</h3>
          <input
            onChange={getQty}
            type="text"
            name="Quantity"
            placeholder="Enter stock quantities"
          />
        </label>
        <label id="Current">
          <h3>Final Price</h3>
          <input
            onChange={getCurr}
            type="text"
            name="Current Price"
            placeholder="Enter Current Price"
          />
        </label>
      </form>
      <button onClick={submitHandler}>Tell ME!</button>
      <div className="output">{meaning}</div>
    </div>
  );
}
