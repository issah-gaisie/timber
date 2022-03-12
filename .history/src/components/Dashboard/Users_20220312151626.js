import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {} from 'react-icons/ri'
// import { profileRoutes } from "../../../utils";
const Users = () => {
  return (
    <div className="w-full h-full p-6 flex flex-col items-start">
      <div className="flex justify-end">
        <button className="px-3 py-2">
          Add User
        </button>
      </div>
      <h1 className="text-4xl font-extrabold my-3 text-slate-700">Users</h1>
      
    </div>
  );
};

export default Users;
