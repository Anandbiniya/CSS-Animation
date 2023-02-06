import React, { Component } from "react";

export default class SubmitData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }
  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };
  onChangeMail = (e) => {
    this.setState({ email: e.target.value });
  };
  SubmitData = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
    });
  };
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));
    if (localStorage.getItem("user")) {
      this.setState({
        name: this.userData.name,
        email: this.userData.email,
      });
    } else {
      this.setState({
        name: "",
        email: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }
  render() {
    const { name, email } = this.state;
    return (
      <div>
        <form onSubmit={this.SubmitData}>
          <label>Name</label>
          <input type="text" onChange={this.onChangeName} value={this.name} />
          <label>Email:</label>
          <input type="email" onChange={this.onChangeMail} value={this.email} />
          <button type="submit">Submit</button>
        </form>

        {this.state.name && this.state.email ? (
          <div>
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.email}</p>
          </div>
        ) : (
          <div>Loading data...</div>
        )}
      </div>
    );
  }
}
