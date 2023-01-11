import React, { Component } from "react";

export default class BindEventhandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
    };
    this.clickHnadler = this.clickHnadler.bind(this);
  }
  clickHnadler() {
    this.setState({
      message: "good bye!",
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHnadler}>Click</button>
      </div>
    );
  }
}
