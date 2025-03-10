import { Fragment } from "react";
import Nav from "./navigation/Nav";
import Subnav from "./mainNavigation/Subnav";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <Fragment>
      <Nav />
      <Subnav />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
