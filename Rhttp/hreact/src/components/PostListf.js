import React, { useEffect, useState } from "react";
import axios from "axios";

function PostListf() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {post.length
        ? post.map((p) => {
            return <div key={p.id}>{p.title}</div>;
          })
        : null}
    </div>
  );
}

export default PostListf;
