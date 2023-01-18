import React, { Component } from "react";

export default class RefGuide extends Component {
  constructor(props) {
    super(props);
    this.myref = React.createRef();
  }
  clickHandler = () => {
    const textBox = this.myref.current;
    textBox.focus();
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.myref} />
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}
