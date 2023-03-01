import logo from "./logo.svg";
import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import Toggle from "./components/Toggle";
import ToggleState from "./components/ToggleState";
import InputUser from "./components/InputUser";
import ComponentOne from "./components/ComponentOne";
import ComponentThree from "./components/ComponentThree";
import ComponentTwo from "./components/ComponentTwo";
import { React, useReducer, createContext } from "react";

export const CountContext = createContext();
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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        {/* <CounterOne />
      <CounterTwo />
      <Toggle /> */}
        {/* <ToggleState />
      <InputUser /> */}
        <ComponentOne />
        <ComponentTwo />
        <ComponentThree />
      </div>
    </CountContext.Provider>
  );
}

export default App;
