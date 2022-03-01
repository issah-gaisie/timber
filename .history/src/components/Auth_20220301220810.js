import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Auth = () => {
  const { pathname } = useLocation();

  const isLogin = useMemo(() => pathname === "/login", [pathname]);
  return (
    <div className="h-screen w-screen p-6 flex justify-center items-center >
      {/* the header will come later */}
      Auth
      <Outlet />
    </div>
  );
};

export default Auth;
