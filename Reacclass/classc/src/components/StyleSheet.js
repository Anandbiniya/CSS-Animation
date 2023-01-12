import React, { Component } from "react";
import "./myStyle.css";
export default class StyleSheet extends Component {
  render() {
    // Passing props for styling
    let className = this.props.primary ? "primary" : "";
    return <h1 className={className}>StyleSheet</h1>;
  }
}
