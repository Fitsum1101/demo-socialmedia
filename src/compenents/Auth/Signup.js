import React from "react";
import classes from "./Signup.module.css";
import TextInput from "../input/text/TextInput";
import FileInput from "../input/file/FileInput";
import Button from "../button/Button";
const Signup = () => {
  return (
    <form className={classes.form}>
      <TextInput placeholder={"Username"} name={"username"} type={"text"} />
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
      <FileInput />
      <Button>submit</Button>
    </form>
  );
};

export default Signup;
