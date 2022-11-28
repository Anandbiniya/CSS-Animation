import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import One from "./components/One";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <One name="amith" />
    </div>
  );
}

export default App;
