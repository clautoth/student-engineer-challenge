import React from "react";
import { useState } from "react";
import "./counter.scss";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <p>I am a counter.</p>
      <p>Do you want to try me?</p>
      <h1 data-testid="counter-text"> {count}</h1>
      <button onClick={() => setCount(count - 1)} data-testid="btn-">
        -
      </button>
      <button onClick={() => setCount(count + 1)} data-testid="btn+">
        +
      </button>
    </div>
  );
}

export default Counter;
