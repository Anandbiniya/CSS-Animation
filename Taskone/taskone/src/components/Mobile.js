import React, { Component } from "react";

export default class Mobile extends Component {
  onDragStart = (event) => {
    event.dataTransfer.setData(
      "text/plain",
      `${this.props.id}:${this.props.position}`
    );
  };

  render() {
    return (
      <div
        className="Mobile"
        data-position={this.props.position}
        draggable
        onDragStart={this.onDragStart}
      >
        hello
        {this.props.name}
      </div>
    );
  }
}
