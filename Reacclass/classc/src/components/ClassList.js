import React, { Component } from "react";
import ClassPerson from "./ClassPerson";

export default class ClassList extends Component {
  render() {
    const person = [
      { id: 1, name: "Diana", age: 21, skill: "react" },
      { id: 2, name: "Joe", age: 22, skill: "reactNative" },
      { id: 3, name: "pat", age: 21, skill: "ANg" },
    ];

    const namesList = person.map((e) => <ClassPerson e={e}></ClassPerson>);

    return <div>{namesList}</div>;
  }
}
