import React, { useState } from "react";
// Use State with Previous State
function CounterState() {
  const initialState = 0;
  const [counter, SetCounter] = useState(initialState);
  const IncFive = () => {
    for (let i = 0; i < counter + 1; i++) {
      SetCounter(i + 1);
    }
  };

  return (
    <div>
      counterState{counter}
      <button onClick={() => SetCounter(initialState)}>Reset</button>
      <button onClick={() => SetCounter((prev) => prev + 1)}>Add</button>
      <button onClick={() => SetCounter((prev) => prev - 1)}>Remove</button>
      <button onClick={IncFive}>Inc By 5</button>
    </div>
  );
}

export default CounterState;
