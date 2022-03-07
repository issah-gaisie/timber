import React, { useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import manCuttingTimber from "../assets/man_cutting_timber.jpg";
const Auth = () => {
  const { pathname } = useLocation();
  // checking if the current location is login
  // const isLogin = useMemo(() => pathname === "/login", [pathname]);
  return (
    <div className="h-screen w-screen flex relative">
      {/* the header will come later */}
      .absolute.w-full.top-

      {/* first inner div */}
      <div className="h-full flex-1 flex flex-col justify-center items-center p-6 lg:p-0 ">
        <Outlet />
      </div>

      {/* second inner div */}
      <div
        className={`hidden md:block flex-1 bg-[#3e7c17] bg-cover bg-no-repeat bg-top-center `}
        style={{
          backgroundImage: `url(${manCuttingTimber})`,
        }}
      ></div>
    </div>
  );
};

export default Auth;

// old sign up reroute
/* <div className="my-3">
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
 </div> */
