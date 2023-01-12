import React, { Component } from "react";

export default class ClassForm extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
    };
  }
  handleName(e) {
    return this.setState({
      name: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <form>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleName}
          />
        </form>
      </div>
    );
  }
}
