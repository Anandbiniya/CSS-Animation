import React, { Component } from "react";

export default class FormComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleTopic = this.handleTopic.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    // If we are using normal function It appears that there is a problem with the handleCommentChange function, which is causing the comments field in the form to not be displayed.
    // The issue could be that the function is not being correctly bound to the component's this context.
    // In javascript class methods are not bound by default, so you need to explicitly bind the this context to the function in order for it to be called correctly. One way to fix it is to use the arrow function (handleCommentChange = (event) => {}) as it is already bound to the component's this context.
    // Another solution would be to bind this to the function inside the constructor function.
  }
  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  // handleCommentChange = (event) => {
  //   this.setState({
  //     comments: event.target.value,
  //   });
  // };
  //we are using normal funcion then we need to bound that with this in Java script class methods will not bound defalt

  handleCommentChange(event) {
    return this.setState({
      comments: event.target.value,
    });
  }
  handleTopic(event) {
    this.setState({
      topic: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    //when we use preventdefault the data will not lost it will be there untill we chang or rerender
    alert(`${this.state.username}  ${this.state.comments} ${this.state.topic}`);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User Name:</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUserNameChange}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              value={this.state.comments}
              onChange={this.handleCommentChange}
            ></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopic}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
