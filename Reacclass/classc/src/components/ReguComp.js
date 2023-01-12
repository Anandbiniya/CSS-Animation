import React, { Component } from "react";

export default class ReguComp extends Component {
  render() {
    console.log("regu")
    return (
      <div>
        ReguComp
        {this.props.name}
      </div>
    );
  }
}
