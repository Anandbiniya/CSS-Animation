import { useState, useEffect } from "react";

export const PostList = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {posts.map((e) => {
          return <li key={e.id}>{e.title}</li>;
        })}
      </ul>
    </div>
  );
};
