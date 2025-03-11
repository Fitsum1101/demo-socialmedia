import React from "react";
import classes from "./Login.module.css";
import TextInput from "../input/text/TextInput";
import Button from "../button/Button";
const Login = () => {
  return (
    <form className={classes.form}>
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
    </form>
  );
};

export default Login;
