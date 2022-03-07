import React, { useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Auth = () => {
  const { pathname } = useLocation();
  // checking if the current location is login
  const isLogin = useMemo(() => pathname === "/login", [pathname]);
  return (
    <div className="h-screen w-screen p-6 flex">
      {/* first inner div */}
    <div className="">
      {/* the header will come later */}
      <h1 className="font-bold text-gray-800 text-3xl mb-6">
        {isLogin ? "Welcome Back" : "Create Account"}
      </h1>
      <Outlet />
      <div className="my-3">
        {isLogin ? (
          <span className="text-gray-700">
            Don't have an Account?{" "}
            <Link to="/signup" className="text-indigo-700">
              Sign Up
            </Link>
          </span>
        ) : (
          <span>
            Already have an Account?{" "}
            <Link to="/login" className="text-indigo-700">
              Login
            </Link>
          </span>
        )}
      </div>
    </div>

    {/* second inner div */}
    <div className="">

    </div>
    </div>

  );
};

export default Auth;
