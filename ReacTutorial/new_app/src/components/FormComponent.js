import { useState } from "react";

export const FormComponent = () => {
  const [username, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`form data is ${username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>UserName</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="submit">Submit</button> 
    </form>
  );
};
