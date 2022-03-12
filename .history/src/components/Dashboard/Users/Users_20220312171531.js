import React from "react";
import { Outlet } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import manCTimber from "../../../assets/man_cutting_timber.jpg";
import { userRoutes } from "../../../utils";
import DashboardTabLink from "../sub-components/DashboardTabLink";
const Users = () => {
  return (
    <div className="w-full h-full p-6 flex flex-col items-start">
      <div className="w-full  flex justify-between items-center">
        <h1 className="text-4xl font-extrabold my-3 text-slate-700">Users</h1>
        <div className="flex ">
          <button className="hidden md:flex px-2 py-1 bg-[#3e7c17] text-white hover:bg-[#356C14] flex items-center text-md rounded rounded-md hover:shadow-md">
            <RiAddLine className="text-lg mr-1" />
            <span> Add User</span>
          </button>
          <button className="md:hidden rounded rounded-full p-2 shadow-lg bg-[#3e7c17] hover:bg-[#356C14]">
            <RiAddLine className="text-lg text-white" />
          </button>
        </div>
      </div>
      <nav className="w-full text-left py-5 border-b border-gray-300 mb-2 flex flex-wrap">
        {userRoutes.map((route) => (
          <DashboardTabLink {...route} />
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Users;

const UserCard = (props) => {
  const {
    name = "Issah Muniru",
    role = "Admin",
    profileImage = manCTimber,
    active = true,
  } = props;
  return (
    <div className="bg-white rounded rounded lg flex justify-center items-center flex-col p-3 space-y-3">
      {/* image and role section */}
      <div className="h-16 w-16 relative">
        <img
          src={profileImage}
          alt=""
          className="object-cover rounded rounded-full h-full w-full"
        />
        <span className="w-full block text-center absolute -bottom-1 uppercase rounded rounded-full bg-[#DEF6D0] text-[#4B971C] px-2 text-[0.7rem]">
          {role}
        </span>
      </div>
      {/* Name */}
      <h2 className="font-semibold text-gray-700">{name}</h2>
    </div>
  );
};

/* <div className="grid w-full grid-cols-4 gap-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div> */
