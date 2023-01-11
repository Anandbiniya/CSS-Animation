import React, { useState } from "react";

function FunUsergreeting() {
  const [state, setState] = useState(true);
  const [inside, setInside] = useState(false);
  const [ininside, setinInside] = useState(true);
  return (
    // <div>{state ? <div>Wel come anand</div> : <div>Wel come guest</div>}</div>
    <div>
      {state && (
        <div>
          welcome
          {inside ? (
            <div>Pat{ininside && <div>Korn</div>}</div>
          ) : (
            <div>Pran</div>
          )}
        </div>
      )}
    </div>
  );
}

export default FunUsergreeting;
