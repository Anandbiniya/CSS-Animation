import React, { Component } from "react";

export default class ClassPerson extends Component {
  render() {
    const { e } = this.props;
    return (
      <div>
        <div key={e.id}>
          I am {e.name} I am {e.age} old .I know
          {e.skill}
        </div>
      </div>
    );
  }
}
