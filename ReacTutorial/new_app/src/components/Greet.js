import React from "react";

const Greet = (props) => {
  const { name, age } = props;
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};
export default Greet;
