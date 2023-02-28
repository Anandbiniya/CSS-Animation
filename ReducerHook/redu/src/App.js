import logo from "./logo.svg";
import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
      <Toggle />
    </div>
  );
}

export default App;
