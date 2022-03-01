import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Auth = () => {
    const {pathname}=useLocation()
    console.log(pathname)
  return (
    <div>
      Auth
      <Outlet />
    </div>
  );
};

export default Auth;
