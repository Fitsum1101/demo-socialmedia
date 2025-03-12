import React from "react";
import { Form, useActionData } from "react-router";
import classes from "./Signup.module.css";
import TextInput from "../input/text/TextInput";
import FileInput from "../input/file/FileInput";
import Button from "../button/Button";
const Signup = () => {
  const actionData = useActionData();
  return (
    <Form className={classes.form} method="POST">
      <TextInput placeholder={"Username"} name={"username"} type={"text"} />
      <TextInput
        placeholder={"please insert your Email"}
        name={"email"}
        type={"email"}
      />
      <TextInput
        placeholder={"password please !!"}
        name={"password"}
        type={"password"}
      />
      <FileInput />
      <Button type={"submit"}>submit</Button>
    </Form>
  );
};

export default Signup;
