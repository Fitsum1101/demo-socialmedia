import React from "react";
import classes from "./Button.module.css";
import { Link } from "react-router";
const Button = ({ children, type, handleClick, ref, onClick }) => {
  return (
    <button
      ref={ref}
      type={type}
      // onClick={() => handleClick()}
      className={classes.btn}
    >
      <Link>{children}</Link>
    </button>
  );
};

export default Button;
