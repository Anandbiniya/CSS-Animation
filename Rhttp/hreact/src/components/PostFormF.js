import axios from "axios";
import React, { useEffect, useState } from "react";

function PostFormF() {
  const [state, setState] = useState({
    userId: "",
    title: "",
    body: "",
  });
  const changeHandler = (e) => {
    setState({ [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .postForm(`https://jsonplaceholder.typicode.com/posts`, state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="userId"
          value={state.userId}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="title"
          value={state.title}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="body"
          value={state.body}
          onChange={changeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostFormF;
