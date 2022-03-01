import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Auth = () => {
  const { pathname } = useLocation();

  const isLogin = useMemo(() => pathname === "/login", [pathname]);
  return (
    <div>
        {/* the header will come later */}
      <Outlet />
    </div>
  );
};

export default Auth;
