import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = {
    name: "admin",
    age: 12,
  };
  let location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
