import React, { Component } from "react";

class Hello extends Component {
  render() {
    // return (
    //   <div>
    //     <h1>Hello vishwas</h1>
    //   </div>
    // );
    return React.createElement(
      "div",
      null,
      React.createElement("h1", null, "hello vishwas")
   //second parameter describe about attribute
   
      );
  }
}
export default Hello;
