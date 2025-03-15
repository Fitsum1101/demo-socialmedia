import React from "react";
import classes from "./Addposts.module.css";
import FileInput from "../../input/file/FileInput";
import TextInput from "../../input/text/TextInput";
import { Form } from "react-router";
import Button from "../../button/Button";
const Addposts = () => {
  return (
    <Form className={classes.form} method="POST">
      <TextInput name={"title"} placeholder={"title"} />
      <FileInput placeholder={"Your Image Please"} />
      <textarea name="content" placeholder="post descripton"></textarea>
      <Button type={"submit"}> Add Post</Button>
    </Form>
  );
};

export default Addposts;
