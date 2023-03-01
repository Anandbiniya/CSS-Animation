import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentOne
      <div>count={countContext.countState}</div>
      <button onClick={() => countContext.countDispatch("increment")}>
        Inc
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Dec
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentF;
