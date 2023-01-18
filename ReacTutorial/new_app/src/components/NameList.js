import React from "react";

export const NameList = () => {
  const names = ["Ronnie", "eddie", "barry", "cisco", "catlin", "HR", "wells"];
  return (
    <div>
      {names.map((e) => {
        return <h3 key={e}>{e}</h3>;
      })}
    </div>
  );
};
