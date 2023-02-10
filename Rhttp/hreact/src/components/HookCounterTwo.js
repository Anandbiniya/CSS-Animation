import React, { useState } from "react";

function HookCounterTwo() {
  const init = 0;
  const [count, setCount] = useState(init);
  return (
    <div>
      count:{count}
      <button onClick={() => setCount(init)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default HookCounterTwo;
