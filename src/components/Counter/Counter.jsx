import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  console.log("Counter component has been rendered !!!");

  const handleDecrement = () => setCount(count - 1);
  const handleIncrement = () => setCount(count + 1);
  const handleReset = () => setCount(0);

  return (
    <div>
      <button onClick={handleDecrement}>Decrement</button>
      <span style={{ margin: "20px" }}>{count}</span>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
