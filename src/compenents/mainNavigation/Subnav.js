import React from "react";
import classes from "./subnav.module.css";
import { Link } from "react-router";
const Subnav = () => {
  return (
    <div className={classes.subNav}>
      <ul>
        <li>
          <Link to={"/posts"}> posts</Link>
        </li>
        <li>
          <Link to={"/m"}> Myposts</Link>
        </li>
        <li>
          <Link to={"/add-posts"}> Add posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Subnav;
