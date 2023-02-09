import React, { Component } from "react";

class HoverCountertwo extends Component {
  render() {
    const { name, count, increment } = this.props;
    return (
      <div>
        <h2 onMouseOver={increment}>Hovered {count} times </h2>
      </div>
    );
  }
}

export default HoverCountertwo;
