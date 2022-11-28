import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Router } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ul id="nav-list">
        <li>
          <a href="http://localhost:5173/home">Home</a>
        </li>
        <li>
          <a href="http://localhost:5173/home">Home</a>
        </li>
        <li>
          <a href="http://localhost:5173/home">Home</a>
        </li>
        <li>
          <a href="http://localhost:5173/home">Home</a>
        </li>
        <li>
          <a href="http://localhost:5173/home">Home</a>
        </li>
        Anand
      </ul>
      <Router />
    </div>
  );
}

export default App;
