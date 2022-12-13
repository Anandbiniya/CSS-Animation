import logo from "./logo.svg";
import "./App.css";
import CounterState from "./components/CounterState";
import HookCounterthree from "./components/HookCounterthree";
import HookCounterFour from "./components/HookCounterFour";

function App() {
  return (
    <div className="App">
      <CounterState />
      <HookCounterthree />
      <HookCounterFour />
    </div>
  );
}

export default App;
