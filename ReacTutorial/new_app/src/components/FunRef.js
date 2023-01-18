import React from "react";

function FunRef() {
  const inputRef = React.createRef();
  function clickHandler() {
    alert(inputRef.current.value);
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunRef;
