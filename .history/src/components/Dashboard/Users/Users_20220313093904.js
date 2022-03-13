import React from "react";
import { Link, Outlet, useLocation,useRoutes } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import { userRoutes } from "../../../utils";
import DashboardTabLink from "../sub-components/DashboardTabLink";
const Users = () => {
  const tabPaths = userRoutes.map(({ path }) => `/dashboard/users/${path}`);
  const {pathname}=useLocation()
  console.log({pathname},{tabPaths});
  return (
    <div className="w-full h-full p-6 flex flex-col items-start">
      
      <Outlet />
    </div>
  );
};

export default Users;


const DashboardUsersHeader=()=>{

}