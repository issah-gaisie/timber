import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Auth = () => {
  const { pathname } = useLocation();

  const isLogin = useMemo(() => pathname === "/login", [pathname]);
  return (
    <div className="h-screen w-screen p-6 flex flex-col justify-center items-center ">
      {/* the header will come later */}
      <h1></h1>
      <Outlet />
    </div>
  );
};

export default Auth;
