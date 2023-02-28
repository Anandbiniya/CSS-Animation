import React, { useReducer } from "react";

const initialState = 0;
const reducer = (currentState, action) => {
  // return newState
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count={count}</div>
      <button onClick={() => dispatch("increment")}>Inc</button>
      <button onClick={() => dispatch("decrement")}>Dec</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;
