import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Auth = () => {
  const { pathname } = useLocation();

  const isLogin = useMemo(() => pathname === "/login", [pathname]);
  console.log(isLogin)
  return (
    <div>
      Auth {isLogin}
      <Outlet />
    </div>
  );
};

export default Auth;
