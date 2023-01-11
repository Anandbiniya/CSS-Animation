import React, { Component } from "react";

export default class UserGreting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  //If else will not work inside of JSX
  render() {
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Wel come viswas</div>;
    // } else {
    //   message = <div>Welcome guest</div>;
    // }
    // if (this.state.isLoggedIn) {
    //   return <div>Wel come viswas</div>;
    // } else {
    //   return <div>Welcome guest</div>;
    // }
    // return (
    //   <div>

    //     <div>Welcome Guest</div>
    //   </div>
    // );
    //the below one called ternary approach
    // return this.state.isLoggedIn ? (
    //   <div>Wel come viswas</div>
    // ) : (
    //   <div>Welcome guest</div>
    // );
    //short circuit operator
    return this.state.isLoggedIn && <div>Wel come viswas</div>;
  }
}
