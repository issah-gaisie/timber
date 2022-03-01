import React, { useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Auth = () => {
  const { pathname } = useLocation();

  const isLogin = useMemo(() => pathname === "/login", [pathname]);
  return (
    <div className="h-screen w-screen p-6 flex flex-col justify-center items-center ">
      {/* the header will come later */}
      <h1 className="font-bold text-gray-800 text-3xl mb-6">
        {isLogin ? "Welcome Back" : "Create An Account"}
      </h1>
      <Outlet />
      <div className="">{isLogin ? <span>Dont have an Account <Link >Sign Up</Link></span> : ""}</div>
    </div>
  );
};

export default Auth;
