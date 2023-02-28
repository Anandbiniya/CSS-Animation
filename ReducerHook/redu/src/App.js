import logo from "./logo.svg";
import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import Toggle from "./components/Toggle";
import ToggleState from "./components/ToggleState";
import InputUser from "./components/InputUser";

function App() {
  return (
    <div className="App">
      {/* <CounterOne />
      <CounterTwo />
      <Toggle /> */}
      <ToggleState />
      <InputUser />
    </div>
  );
}

export default App;
