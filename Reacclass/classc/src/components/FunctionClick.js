import React from "react";

function FunctionClick() {
  function handleButton() {
    console.log("click function");
  }
  return (
    <div>
      <button onClick={handleButton}>Click</button>
    </div>
  );
}

export default FunctionClick;
