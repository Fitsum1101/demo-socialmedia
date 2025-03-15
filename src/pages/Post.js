import React from "react";
import Gatposts from "../compenents/posts/getposts/Gatposts";
const Post = () => {
  return <Gatposts />;
};

export default Post;


export const action = async (req,params) =>{
  const result = await fetch('http://localhost:')
}