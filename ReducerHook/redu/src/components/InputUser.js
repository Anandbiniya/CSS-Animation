import React, { useReducer } from "react";

function nameReducer(state, action) {
  switch (action.type) {
    case "updatename":
      return action.payload;
    default:
      throw new Error("invalid");
  }
}

function InputUser() {
  const [name, dispatch] = useReducer(nameReducer, "");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  const handleNameChange = (e) => {
    dispatch({ type: "updatename", payload: e.target.value });
  };
  return (
    <div>
      InputUser
      <form onSubmit={handleNameChange}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Entered Name: {name}</p>
    </div>
  );
}

export default InputUser;
