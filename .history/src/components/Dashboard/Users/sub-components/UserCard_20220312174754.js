import React from "react";
import manCTimber from "../../../../assets/man_cutting_timber.jpg";
import { GrView } from "react-icons/gr";
const UserCard = (props) => {
  const {
    name = "Issah Muniru",
    role = "Admin",
    profileImage = manCTimber,
    active = false,
    className,
  } = props;
  return (
    <div
      className={`bg-white rounded rounded-lg flex justify-center items-center flex-col p-3 space-y-2 shadow shadow-sm hover:shadow-lg ${className} min-w-[200px]`}
    >
      {/* image and role section */}
      <div className="h-16 w-16 relative">
        <img
          src={profileImage}
          alt=""
          className="object-cover rounded rounded-full h-full w-full"
        />
        {/* <span className="w-full block text-center absolute -bottom-1 uppercase rounded rounded-full bg-[#DEF6D0] text-[#4B971C]/50 font-medium px-2 text-[0.7rem]">
          {role}
        </span> */}
      </div>
      {/* Name */}
      <h2 className="font-semibold text-gray-700">{name}</h2>
      <h2 className="text-gray-500">{role}</h2>
      {/* {active ? (
        <span className="text-green-600 font-medium">Active</span>
      ) : (
        <span className="text-red-600 font-medium">Deactivated</span>
      )} */}
    </div>
  );
};

export default UserCard;

export const ActiveUser = () => {
  return <UserCard className="bg-green-100" />;
};

export const DeactivatedUser = () => {
  return <div className=""></div>;
};
