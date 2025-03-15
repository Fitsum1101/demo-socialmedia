import React from "react";
import Gatposts from "../compenents/posts/getposts/Gatposts";
import { useLoaderData } from "react-router";
const Post = () => {
  const posts = useLoaderData();
  return <Gatposts posts={posts} />;
};

export default Post;

export const loader = async (req, params) => {
  const result = await fetch("http://localhost:8080/posts");
  if (!result.ok) {
    throw new Error("Data can not accessed for some reason");
  }

  const data = await result.json();
  return data.posts;
};
