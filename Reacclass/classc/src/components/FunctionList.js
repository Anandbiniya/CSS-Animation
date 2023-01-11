import React from "react";
import FunctionPerson from "./FunctionPerson";

function FunctionList() {
  const persons = [
    { id: 1, name: "Diana", age: 21, skill: "react" },
    { id: 2, name: "Joe", age: 22, skill: "reactNative" },
    { id: 3, name: "pat", age: 21, skill: "ANg" },
  ];

  const namesList = persons.map((person) => (
    <FunctionPerson e={person}></FunctionPerson>
  ));

  return <div>{namesList}</div>;
}

export default FunctionList;
