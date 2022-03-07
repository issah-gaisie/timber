import React, { useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Auth = () => {
  const { pathname } = useLocation();
  // checking if the current location is login
  const isLogin = useMemo(() => pathname === "/login", [pathname]);
  return (
    <div className="h-screen w-screen flex">
      {/* first inner div */}
      <div className="h-full flex-1 flex flex-col justify-center items-center">
        {/* the header will come later */}
        <h1 className="font-bold text-left text-gray-800 text-3xl mb-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <Outlet />
        
      </div>

      {/* second inner div */}
      <div className="hidden md:block flex-1 bg-[#3e7c17] "></div>
    </div>
  );
};

export default Auth;
