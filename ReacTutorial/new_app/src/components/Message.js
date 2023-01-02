import { useState } from "react";

export const Message = (props) => {
  const [message, setMessage] = useState("");
  //use state will take two values and we store in two onstants of an array
  return (
    <div>
      {message}
      <button onClick={() => setMessage(`you clicked`)}>Subscribe</button>
    </div>
  );
};
