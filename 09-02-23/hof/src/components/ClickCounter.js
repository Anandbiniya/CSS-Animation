import React, { Component } from "react";
import withCounter from "./withCounter";
class ClickCounter extends Component {
  render() {
    const { count, increment } = this.props;

    return (
      <div>
        <button onClick={increment}>
          {this.props.name}Clicked {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
