import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCountertwo from "./components/ClickCountertwo";
import HoverCountertwo from "./components/HoverCountertwo";
import User from "./components/User";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter
        render={(name, count, increment) => (
          <ClickCountertwo
            name={name}
            count={count}
            increment={increment}
          ></ClickCountertwo>
        )}
      />
      <Counter
        render={(name,count, increment) => (
          <HoverCountertwo
          name={name}
            count={count}
            increment={increment}
          ></HoverCountertwo>
        )}
      />
    </div>
  );
}

export default App;
