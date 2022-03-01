import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Auth = () => {
    const {pathname}=useLocation()
    console.log(pathname)
    useMemo
  return (
    <div>
      Auth
      <Outlet />
    </div>
  );
};

export default Auth;
