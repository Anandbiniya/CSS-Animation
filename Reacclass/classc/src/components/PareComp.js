import React, { Component } from "react";
import Purecomponent from "./PureComponent";
import ReguComp from "./ReguComp";

class PareComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "vishwas",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "vishwas" });
    }, 2000);
  }
  render() {
    console.log("parent");
    return (
      <div>
        PareComp
        <ReguComp name={this.state.name} />
        <Purecomponent name={this.state.name} />
      </div>
    );
  }
}

export default PareComp;
