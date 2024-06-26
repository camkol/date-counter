import { useState } from "react";

export default function App() {
  return (
    <div>
      <h1>Date Counter</h1>
      <h2>Version 1</h2>
      <h3>Mine</h3>
      <CounterMine />
      <h3>Teachers</h3>
      <CounterTeachers /> <hr />
      <h2>Version 2</h2>
      <h3>Mine</h3>
      <CounterMineTwo />
      <h3>Teachers</h3>
      <CounterTeachersTwo />
    </div>
  );
}

function CounterMine() {
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

function CounterTeachers() {
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

function CounterMineTwo() {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(1);

  const handleInput = (e) => {
    setRange(Number(e.target.value));
  };

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const resetCounter = () => {
    setCount(0);
    setRange(1);
  };

  return (
    <div>
      <div>
        <input
          id="inRange"
          type="range"
          min="0"
          max="10"
          value={range}
          onChange={handleInput}
        />
        <label htmlFor="inRange">{range}</label>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - range)}>-</button>

        <input
          type="text"
          id="count"
          count="name"
          minLength={4}
          maxLength={8}
          size={10}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + range)}>+</button>
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
      <button id="reset" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
}

function CounterTeachersTwo() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
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

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
