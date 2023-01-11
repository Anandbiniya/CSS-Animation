import React, { Component } from "react";
//passing methods in props from parent to child
export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.greetHandler("joe")}>
          Greet parent
        </button>
      </div>
    );
  }
}
