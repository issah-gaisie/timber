import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Auth = () => {
    const {pathname}=useLocation()

   const isLogin= useMemo(() => {
    if
   }, [pathname])
  return (
    <div>
      Auth
      <Outlet />
    </div>
  );
};

export default Auth;
