import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import manCTimber from '../../assets/man_cutting_timber.jpg'
// import { profileRoutes } from "../../../utils";
const Users = () => {
  return (
    <div className="w-full h-full p-6 flex flex-col items-start">
      <div className="w-full  flex justify-end">
        <button className="px-2 py-2 bg-[#3e7c17] text-white hover:bg-[#356C14] flex items-center text-md rounded rounded-md hover:shadow-md">
          <RiAddLine className="text-lg mr-2" />
          <span> Add User</span>
        </button>
      </div>
      <h1 className="text-4xl font-extrabold my-3 text-slate-700">Users</h1>
    </div>
  );
};

export default Users;

const UserCard=(props)=>{
  const {name='Issah',role="Admin",profileImage,active=true}=props
  return(
    <div className="bg-white rounded rounded lg flex justify-center items-center flex-col">

    </div>
  );
}
