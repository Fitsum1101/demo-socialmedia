import React from "react";
import { useLoaderData } from "react-router";
import { getToken } from "../store/localstorage";
import Addposts from "../compenents/posts/addposts/Addposts";

const UpdatePost = () => {
  const updatedData = useLoaderData();
  return <Addposts data={updatedData} />;
};

export default UpdatePost;

export const loader = async ({ req, params }) => {
  console.log("postId", params);
  const postId = params.postId;
  const result = await fetch("http://localhost:8080/posts/update/" + postId, {
    headers: {
      authorization: getToken("token"),
    },
  });

  if (!result.ok) {
    throw new Error("something is not working");
  }
  const data = await result.json();
  return data.post;
};
