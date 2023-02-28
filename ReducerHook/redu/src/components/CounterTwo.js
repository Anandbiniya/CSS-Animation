import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (currentState, action) => {
  // return newState
  switch (action.type) {
    case "increment":
      return { firstCounter: currentState.firstCounter + action.value };
    case "decrement":
      return { firstCounter: currentState.firstCounter - action.value };

    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count={count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Inc
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Dec
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Inc5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Dec5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;


// In the example take away we can maintain both the state and action as objects by using action as an object we are able to pass additional data to reducer function
// ANd we can keep track of multiple states


