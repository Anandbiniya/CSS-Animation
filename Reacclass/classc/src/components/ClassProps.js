import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    const { name, hero } = this.props;

    return (
      <div>
        {name} {hero}
      </div>
    );
  }
}
