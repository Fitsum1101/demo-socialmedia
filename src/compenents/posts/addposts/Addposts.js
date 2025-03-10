import React from "react";
import classes from "./Addposts.module.css";
import FileInput from "../../input/file/FileInput";
import TextInput from "../../input/text/TextInput";
import { Form } from "react-router";
import Button from "../../button/Button";
const Addposts = () => {
  return (
    <form className={classes.form} action="">
      <TextInput placeholder={"title"} />
      <FileInput placeholder={"Your Image Please"} />
      <textarea placeholder="post descripton"></textarea>
      <Button type={"submit"}> Add Post</Button>
    </form>
  );
};

export default Addposts;
