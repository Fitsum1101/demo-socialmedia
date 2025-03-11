import React from "react";
import { Outlet } from "react-router";
import Subnav from "./mainNavigation/Subnav";

const SubLayout = () => {
  return (
    <>
      <Subnav />
      <Outlet />;
    </>
  );
};

export default SubLayout;
