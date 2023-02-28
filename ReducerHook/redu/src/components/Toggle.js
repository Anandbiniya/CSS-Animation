import React, { useReducer } from "react";

const Toggle = () => {
  const [isOpen, togglefun] = useReducer((state) => {
    return !state;
  }, false);
  return (
    <div>
      <button onClick={togglefun}>Toggle</button>
      <p>{isOpen ? "yes" : "No"}</p>
    </div>
  );
};

export default Toggle;
