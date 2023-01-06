import { useState } from "react";

export const FormDataTable = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [lastname, setLast] = useState("");

  function handleform(e) {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("lastname", lastname);
    alert(`${name}${age}${lastname}`);
  }
  return (
    <div>
      <h1>Form Data</h1>
      <form onSubmit={handleform}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <label>LastName:</label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLast(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
