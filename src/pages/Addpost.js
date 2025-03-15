import React from "react";
import Addposts from "../compenents/posts/addposts/Addposts";
import { getToken } from "../store/localstorage";
import { redirect } from "react-router";
const Addpost = () => {
  return (
    <>
      <Addposts />;
    </>
  );
};

export default Addpost;

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");
  const file = formData.get("file");

  const newFileDate = new FormData();

  newFileDate.append("file", file);
  newFileDate.append("title", title);
  newFileDate.append("content", content);
  // const formDate

  const result = await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      authorization: getToken("token"), 
    },
    body: newFileDate,
  });

  if (!result.ok) {
    throw new Error("product can not be inserted");
  }

  return redirect("/posts");
};
