import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Auth = () => {
    const loc=useLocation()
    console.log(location)
  return (
    <div>
      Auth
      <Outlet />
    </div>
  );
};

export default Auth;
