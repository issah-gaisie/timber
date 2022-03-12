import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { profileRoutes } from "../../../utils";
import DashboardTabLink from "../sub-components/DashboardTabLink";

const Profile = () => {
  return (
    <div className="w-full h-full p-6 flex flex-col items-start">
      <h1 className="text-4xl font-extrabold my-3 text-slate-700">Profile</h1>
      <nav className="w-full text-left py-5 border-b border-gray-300 mb-2 flex flex-wrap">
        {profileRoutes.map((route) => (
          <DashboardTabLink {...route} />
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Profile;


