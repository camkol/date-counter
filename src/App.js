import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [someDate, setSomeDate] = useState(new Date());

  function stepPlus() {
    setStep((s) => s + 1);
  }
  function stepMinus() {
    if (step > 1) setStep((s) => s - 1);
  }
  function countPlus() {
    const newCount = count + step;
    setCount(newCount);
    updateDate(newCount);
  }
  function countMinus() {
    if (count > 0) {
      const newCount = count - step;
      setCount(newCount);
      updateDate(newCount);
    }
  }

  const updateDate = (newCount) => {
    const newDate = new Date(someDate);
    let daysToAdd = newCount - count;
    newDate.setDate(newDate.getDate() + daysToAdd);
    setSomeDate(newDate);
  };

  return (
    <div id="counter">
      <p id="step">
        <span onClick={stepMinus}>-</span>Step: {step}
        <span onClick={stepPlus}>+</span>
      </p>
      <p style={{ marginTop: 0 }}>
        <span onClick={countMinus}>-</span>Count: {count}
        <span onClick={countPlus}>+</span>
      </p>
      <div id="date">
        <p>Today is {someDate.toDateString()}</p>
      </div>
    </div>
  );
}
