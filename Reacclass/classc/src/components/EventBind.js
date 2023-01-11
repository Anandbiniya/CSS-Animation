import React, { Component } from "react";

export class EventBind extends Component {
  clickHandler() {
    console.log("button clicked");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
        {/* Event Handlers are function not function call do not add paranthesis to it */}
      </div>
    );
  }
}

export default EventBind;
