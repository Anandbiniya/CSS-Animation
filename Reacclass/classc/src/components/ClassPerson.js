import React, { Component } from "react";

export default class ClassPerson extends Component {
  render() {
    const { e } = this.props;
    return (
      <div>
        <div>
          {/* Key property cannot access in child component */}I am {e.name} I
          am {e.age} old .I know
          {e.skill}
        </div>
      </div>
    );
  }
}
