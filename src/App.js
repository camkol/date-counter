import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
      <CounterTwo />
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
    const newCount = count - step;
    setCount(newCount);
    updateDate(newCount);
  }

  const updateDate = (newCount) => {
    const newDate = new Date(someDate);
    let daysToAdd = newCount - count;
    newDate.setDate(newDate.getDate() + daysToAdd);
    setSomeDate(newDate);
  };
  function updateToday() {
    return count === 0
      ? "Today is"
      : count < 0
      ? count * -1 + " days ago was"
      : count + " days from today is";
  }

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
        <p>
          {updateToday()} is {someDate.toDateString()}
        </p>
      </div>
    </div>
  );
}

function CounterTwo() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
