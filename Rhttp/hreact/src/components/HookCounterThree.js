import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ first: "", last: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.first}
          onChange={(e) => setName({ ...name, first: e.target.value })}
        />
        <input
          type="text"
          value={name.last}
          onChange={(e) => setName({ ...name, last: e.target.value })}
        />
        <h2>your firstname: {name.first}</h2>
        <h2>your lastname: {name.last}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
