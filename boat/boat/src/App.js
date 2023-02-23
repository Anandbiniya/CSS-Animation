import "./App.css";
import UpHeader from "./components/UpHeader";
import MainHeader from "./components/MainHeader";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="App">
      {/* <UpHeader />
      <MainHeader /> */}

      <BrowserRouter>
        <Routes>
        <Route path="*">Ups</Route>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
