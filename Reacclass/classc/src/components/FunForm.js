import React, { useState } from "react";

function FunForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [topic, setTopic] = useState("");
  function handleName(e) {
    setName(e.target.value);
  }
  function handleCOmment(e) {
    setComment(e.target.value);
  }
  function handleTopic(e) {
    setTopic(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(`${name}  ${comment} ${topic}`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={handleName} />
        <label>Comment</label>
        <textarea value={comment} onChange={handleCOmment}></textarea>
        <label>Topic</label>
        <select value={topic} onChange={handleTopic}>
          <option value="react">React</option>
          <option value="ang">ANgular</option>
          <option value="vue">Vue</option>
        </select>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}

export default FunForm;
