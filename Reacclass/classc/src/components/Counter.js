import React, { Component } from "react";
export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  Add() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }
  del() {
    this.Add();
    this.Add();
    this.Add();
    this.Add();
    this.Add();
  }
  render() {
    return (
      <div>
        <h1>Counter{this.state.count}</h1>
        <button onClick={() => this.Add()}>Add</button>
        <button onClick={() => this.del()}>Delete</button>
      </div>
    );
  }
}
