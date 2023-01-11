import React, { Component } from "react";
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  Add() {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }
  incFive() {
    this.Add();
    this.Add();
    this.Add();
    this.Add();
    this.Add();
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.incFive()}>Add</button>
      </div>
    );
  }
}
