import React from "react";
import { Form } from "react-router";
import classes from "./Login.module.css";
import TextInput from "../input/text/TextInput";
import Button from "../button/Button";
const Login = () => {
  return (
    <Form method="POST" className={classes.form}>
      <TextInput
        placeholder={"please insert your Email"}
        name={"email"}
        type={"email"}
      />
      <TextInput
        placeholder={"password please"}
        name={"password"}
        type={"password"}
      />
      <Button>submit</Button>
    </Form>
  );
};

export default Login;
