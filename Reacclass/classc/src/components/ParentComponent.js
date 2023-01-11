import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      parentName: "parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(child) {
    alert(`Hello ${this.state.parentName} ${child}`);
  }
  render() {
    return (
      <div>
        <button>
          <ChildComponent greetHandler={this.greetParent} />
        </button>
      </div>
    );
  }
}
