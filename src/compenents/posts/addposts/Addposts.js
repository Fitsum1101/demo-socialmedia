import React from "react";
import classes from "./Addposts.module.css";
import FileInput from "../../input/file/FileInput";
import TextInput from "../../input/text/TextInput";
import { Form, useNavigation } from "react-router";
import Button from "../../button/Button";
const Addposts = ({ data }) => {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "submitting" && <h1>Loading...</h1>}
      <Form
        className={classes.form}
        method={data ? "PUT" : "POST"}
        encType="multipart/form-data"
        action="/add-posts"
      >
        <TextInput
          value={data && data.title}
          name={"title"}
          placeholder={"title"}
        />
        <TextInput name={"postId"} value={data && data.id} type={"hidden"} />
        <FileInput placeholder={"Your Image Please"} />
        <textarea
          defaultValue={data && data.content}
          name="content"
          placeholder="Message"
        ></textarea>
        <Button type={"submit"}>{data ? "Update post" : "Share"}</Button>
      </Form>
    </>
  );
};

export default Addposts;
