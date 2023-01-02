import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import ChildProps from "./components/ChildProps";
import { Message } from "./components/Message";
import { ClickHandler } from "./components/ClickHandler";

function App() {
  return (
    <div className="App">
      {/* <Greet name="anand" age="23">
        <ChildProps />
      </Greet>
      <Greet name="amith" age="24">
        <button>Add</button>
      </Greet>
      <Greet name="joey">
        <p>This is children props</p>
      </Greet> */}
      <Message />
      <ClickHandler />
    </div>
  );
}

export default App;
