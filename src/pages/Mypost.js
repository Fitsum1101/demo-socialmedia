import React from "react";
import Gatposts from "../compenents/posts/getposts/Gatposts";
import { getToken } from "../store/localstorage";
import { useLoaderData } from "react-router";
const Mypost = () => {
  const posts = useLoaderData();
  const handleDelete = async (postId) => {
    const result = await fetch("http://localhost:8080/posts/delete", {
      headers: {
        authorization: getToken("token"),
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({
        postId: postId,
      }),
    });
    if (!result.ok) {
      throw new Error("Something is in error");
    }
  };
  return (
    <Gatposts handleDelete={handleDelete} updateDelete={true} posts={posts} />
  );
};

export default Mypost;

export const loader = async () => {
  const result = await fetch("http://localhost:8080/posts/myposts", {
    headers: {
      authorization: getToken("token"),
    },
  });
  if (!result.ok) {
    throw new Error("Data can not accessed for some reason");
  }

  const data = await result.json();
  return data.posts;
};
