import React, { useEffect, useRef } from "react";

function RefFun() {
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current.focus()
  }, []);
  return (
    <div>
      <input type="text" ref={myRef} />
      {/* <button>Click Me!</button> */}
    </div>
  );
}

export default RefFun;
