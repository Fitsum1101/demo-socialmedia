import React from "react";
import classes from "./Addposts.module.css";
import FileInput from "../../input/file/FileInput";
import TextInput from "../../input/text/TextInput";
import { Form, useNavigation } from "react-router";
import Button from "../../button/Button";
const Addposts = () => {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "submitting" && <h1>Loading...</h1>}
      <Form className={classes.form} method="POST" encType="multipart/form-data">
        <TextInput name={"title"} placeholder={"title"} />
        <FileInput placeholder={"Your Image Please"} />
        <textarea name="content" placeholder="post descripton"></textarea>
        <Button type={"submit"}> Add Post</Button>
      </Form>
    </>
  );
};

export default Addposts;
