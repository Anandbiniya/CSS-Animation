import React, { Component } from "react";

class ClickCountertwo extends Component {
  render() {
    const { name, count, increment } = this.props;
    return (
      <button onClick={increment}>
        {name}Clicked {count} times
      </button>
    );
  }
}

export default ClickCountertwo;
