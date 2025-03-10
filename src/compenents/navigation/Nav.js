import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
const Nav = () => {
  return (
    <header className={classes.headers}>
      <nav className={classes.nav}>
        <div className={classes.naveLogo}>
          <Link to={"/"}>Faccebook</Link>
        </div>
        <ul>
          <li>
            <Link to={"/signup"}>sign up</Link>
          </li>
          <li>
            <Link to={"/loginup"}>login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
