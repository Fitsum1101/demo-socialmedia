import React from "react";
import classes from "./subnav.module.css";
import { Link } from "react-router";
const Subnav = () => {
  return (
    <div className={classes.subNav}>
      <ul>
        <li>
          <Link className={classes.active} to={"/posts"}> posts</Link>
        </li>
        <li>
          <Link to={"/myposts"}> Myposts</Link>
        </li>
        <li>
          <Link to={"/add-posts"}> Add posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Subnav;
