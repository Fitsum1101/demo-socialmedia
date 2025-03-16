import React from "react";
import classes from "./Button.module.css";
import { Link } from "react-router";
const Button = ({ children, type, handleClick, ref, onClick, to }) => {
  return (
    <button
      ref={ref}
      type={type}
      onClick={handleClick ? () => handleClick() : handleClick}
      className={classes.btn}
      // type="submit"
    >
      <Link to={to}>{children}</Link>
    </button>
  );
};

export default Button;
