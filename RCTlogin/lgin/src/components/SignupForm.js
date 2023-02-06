import React, { Component } from "react";

export default class SignupForm extends Component {
  constructor(props) {
    super();
    this.state = {
      employee: {
        id: "",
        Name: "",
        Location: "",
        salary: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.SubmitData = this.SubmitData.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      employee: {
        ...this.state.employee,
        [name]: value,
      },
    });
  }
  SubmitData() {
    alert(this.state.employee);
  }

  render() {
    return (
      <div>
        <form>
          <label>Id</label>
          <input
            type="text"
            name="id"
            value={this.state.employee.id}
            onChange={this.handleChange}
          />
          <label>Name</label>
          <input
            type="text"
            name="Name"
            value={this.state.employee.Name}
            onChange={this.handleChange}
          />
          <label>Location</label>
          <input
            type="text"
            name="Location"
            value={this.state.employee.Location}
            onChange={this.handleChange}
          />
          <label>Salary</label>
          <input
            type="text"
            name="salary"
            value={this.state.employee.salary}
            onChange={this.handleChange}
          />
          <button onClick={this.SubmitData}>Submit</button>
        </form>
      </div>
    );
  }
}
