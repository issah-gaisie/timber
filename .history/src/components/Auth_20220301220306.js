import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Auth = () => {
    const {location}=useLocation()
  return (
    <div>
      Auth
      <Outlet />
    </div>
  );
};

export default Auth;
