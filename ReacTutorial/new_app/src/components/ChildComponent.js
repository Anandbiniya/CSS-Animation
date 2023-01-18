import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={props.greetHandler("anand")}>Greet Parent</button>
    </div>
  );
};

export default ChildComponent;
