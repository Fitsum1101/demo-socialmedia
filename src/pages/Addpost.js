import React from "react";
import Addposts from "../compenents/posts/addposts/Addposts";
import { getToken } from "../store/localstorage";
import { redirect } from "react-router";
const Addpost = () => {
  return <Addposts />;
};

export default Addpost;

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");
  console.log(title, content);
  const result = fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      authorization: getToken("token"), // Corrected spelling here
    },
    body: JSON.stringify({ content, title }),
  });
  if (!result.ok) {
    throw new Error("product can not be inserted");
  }

  return redirect("/posts");
};
