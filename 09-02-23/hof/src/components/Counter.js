import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }
  increment = () => {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
        name:"anand"
      };
    });
  };
  render() {
    return (
      <div>
        {this.props.render(this.state.name, this.state.count, this.increment)}
      </div>
    );
  }
}

export default Counter;
