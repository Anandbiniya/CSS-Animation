import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/Nav";
import Tools from "./components/Tools";
import Benefits from "./components/Benefits";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <h1>Hydroponic</h1>

      <Benefits />
      <div className="card">
        <article>
          Hydroponics is a method of growing plants without soil, by suspending
          roots in a mineral nutrient water solution. There are many advantages
          of hydroponics over soil-less farming, viz; fast plant growth rate,
          high yield, occupies less space, less water consumption and keeps the
          environment healthy as there is no use of fertilizers, herbicides and
          pesticides.
        </article>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/13/Hydroponic_onions%2C_NASA_--_17_June_2004.jpg"
        alt=""
      />
      <Tools />
    </div>
  );
}

export default App;
