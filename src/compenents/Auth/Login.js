import React from "react";
import { Form, useActionData } from "react-router";
import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import TextInput from "../input/text/TextInput";
import { authaction } from "../../utili/user";
import Button from "../button/Button";
const Login = () => {
  const dispatch = useDispatch();
  const action = useActionData();

  const handleAuthtication = () => {
    if (action) dispatch(authaction.isAuthitcate());
  };

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
      <Button onClick={handleAuthtication}>submit</Button>
    </Form>
  );
};

export default Login;
