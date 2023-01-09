import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello visitor",
    };
  }
  onChangeSay() {
    this.setState({
      message: "Thanks visitor",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.onChangeSay()}>Subscribe</button>
      </div>
    );
  }
}
