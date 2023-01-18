import React from "react";
import ChildComponent from "./ChildComponent";
// Parent child communication
export const ParentComponent = () => {
  const greetParent = (childName) => {
    alert(`hello parent  ${childName}`);
  };
  return (
    <div>
      <ChildComponent greetHandler={greetParent} />
    </div>
  );
};
