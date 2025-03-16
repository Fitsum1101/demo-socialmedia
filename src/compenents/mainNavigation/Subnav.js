import React from "react";
import classes from "./subnav.module.css";
import { Link } from "react-router";
import { useSelector } from "react-redux";
const Subnav = () => {
  const isAuth = useSelector((state) => state.isAuth);

  // const tokenExist = localStorage.getItem("token") ? true : false;
  // let auth;
  // if (isAuth || tokenExist) {
  //   auth = true;
  // }

  return (
    <div className={classes.subNav}>
      <ul>
        <li>
          <Link className={classes.active} to={"/posts"}>
            posts
          </Link>
        </li>
        {isAuth && (
          <>
            <li>
              <Link to={"/posts/myposts"}> Myposts</Link>
            </li>
            <li>
              <Link to={"/add-posts"}> Add posts</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Subnav;
