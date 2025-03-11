import { Fragment } from "react";
import Nav from "./navigation/Nav";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <Fragment>
      <Nav />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
