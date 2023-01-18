import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Names from "./components/data.json";
// import Greet from "./components/Greet";
// import ChildProps from "./components/ChildProps";
// import { Message } from "./components/Message";
// import { ClickHandler } from "./components/ClickHandler";
// import { ParentComponent } from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
// import { NameList } from "./components/NameList";
// import { StyleSheet } from "./components/StyleSheet";
// import { Inline } from "./components/Inline";
// import { FormComponent } from "./components/FormComponent.js";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import RefDemo from "./components/RefDemo";
import FunRef from "./components/FunRef";
import RefGuide from "./components/RefGuide";
import RefFun from "./components/RefFun";

function App() {
  const [query, setQuery] = useState("");

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  const filterdNames = Names.filter((e) => {
    return e.first_name.includes(query) || e.last_name.includes(query);
  });

  return (
    <div className="App">
      {/* <input type="text" value={query} onChange={changeHandler} /> */}
      {/* <Greet name="anand" age="23">
        <ChildProps />
      </Greet>
      <Greet name="amith" age="24">
        <button>Add</button>
      </Greet>
      <Greet name="joey">
        <p>This is children props</p>
      </Greet> */}
      {/* <Message />
      <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting />
      <NameList /> */}
      {/* <StyleSheet />
      <Inline /> */}
      {/* //<FormComponent /> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
      {/* {filterdNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))} */}
      {/* <RefDemo /> */}
      {/* <FunRef /> */}
      {/* <RefGuide /> */}
      <RefFun />
    </div>
  );
}

export default App;
