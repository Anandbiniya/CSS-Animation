import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ClassProps from "./components/ClassProps";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import BindEventhandler from "./components/BindEventhandler";
import ParentComponent from "./components/ParentComponent";
import UserGreting from "./components/UserGreting";
import FunUsergreeting from "./components/FunUsergreeting";
import ClassList from "./components/ClassList";
import FunctionList from "./components/FunctionList";
import StyleSheet from "./components/StyleSheet";
import { Form } from "react-router-dom";
import FormComponent from "./components/Form";
import FunForm from "./components/FunForm";
import ClassForm from "./components/ClassForm";
import FragmentDemo from "./components/FragmentDemo";

function App() {
  return (
    <div className="App">
      {/* <Greet name="vshwas" hero="super" /> */}
      {/* <Welcome qual="good" />
      <Welcome qual="fine" />
      <Welcome qual="gret" /> */}
      {/* <Message/> */}
      {/* <Hello /> */}
      {/* <Counter /> */}
      {/* <ClassProps name="joy" hero="graceffa" /> */}
      {/* <EventBind />
      <FunctionClick /> */}
      {/* <BindEventhandler />
      <ParentComponent /> */}
      {/* <UserGreting />
      <FunUsergreeting /> */}
      {/* <ClassList /> */}
      {/* <FunctionList /> */}
      {/* <StyleSheet primary={true} /> */}
       {/* <FunForm />
      <FormComponent />  */}
      {/* <ClassForm /> */}
      <FragmentDemo/>
    </div>
  );
}

export default App;
