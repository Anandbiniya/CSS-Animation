import React, { useState } from "react";

function ToggleState() {
  const [open, setOpen] = useState(false);
//   setOpen((open) => {
//     return !open;
//   });
  return (
    <div>
      ToggleState
      <button onClick={()=>setOpen(!open)}>Toglre</button>
      <p>{open ? "yes tog" : "Nogo"}</p>
    </div>
  );
}

export default ToggleState;
