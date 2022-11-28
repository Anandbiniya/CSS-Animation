import React from "react";
import "./styles/Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <h3>Hydro</h3>
      </div>
      <div>
        <div>
          <h3>Tools</h3>
        </div>
        <div>
          <h3>About</h3>
        </div>
        <div>
          <h3>Login</h3>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
