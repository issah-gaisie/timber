import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { profileRoutes } from "../../../utils";

const Profile = () => {
  return (
    <div className="w-full h-full  p-6 flex flex-col items-start">
      <h1 className="text-4xl font-extrabold my-3 text-slate-700">Profile</h1>
      <nav className="w-full text-left py-5 border-b border-gray-300 mb-2 flex flex-wrap">
        {profileRoutes.map((route) => (
          <ProfileNavLink {...route} />
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Profile;

const ProfileNavLink = (props) => {
  return (
    <NavLink
      to={props.path}
      className={({ isActive }) =>
        isActive
          ? "p-2 rounded rounded-md bg-[#DEF6D0] text-[#4B971C] text-sm mr-2 font-medium"
          : "p-2 rounded rounded-md hover:bg-[#DEF6D0] text-gray-500 hover:text-[#4B971C] text-sm mr-2 font-medium"
      }
    >
      {props.name}
    </NavLink>
  );
};
