import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAdminAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAdminAuth();
  let location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
