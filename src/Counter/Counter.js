import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementHanlder() {
    setCounter(counter + 1);
  }

  function decrementHandler() {
    setCounter(counter - 1);
  }

  return (
    <div
      style={{
        margin: "20px",
        padding: "10px",
        backgroundColor: "#669bbc",
        borderRadius: "0.3em",
        color: "#fdf0d5",
        display: "inline-block",
      }}
    >
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={incrementHanlder}>Increase</button>
      <button onClick={decrementHandler}>Decrease</button>
    </div>
  );
}

export default Counter;

