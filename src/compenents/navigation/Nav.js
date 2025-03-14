import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authaction } from "../../store/user";
const Nav = () => {
  const auth = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authaction.logout());
    navigate("/");
  };

  return (
    <header className={classes.headers}>
      <nav className={classes.nav}>
        <div className={classes.naveLogo}>
          <Link to={"/"}>Faccebook</Link>
        </div>
        <ul>
          {!auth && (
            <>
              <li>
                <Link to={"/signup"}>sign up</Link>
              </li>
              <li>
                <Link to={"/login"}>login</Link>
              </li>
            </>
          )}
          {auth && (
            <li>
              <Link onClick={handleLogout}>logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
