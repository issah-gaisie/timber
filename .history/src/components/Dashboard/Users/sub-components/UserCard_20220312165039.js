import React from "react";
import manCTimber from "../../../../assets/man_cutting_timber.jpg";
const UserCard = (props) => {
  const {
    name = "Issah Muniru",
    role = "Admin",
    profileImage = manCTimber,
    active = true,
    className
  } = props;
  return (
    <div className={`bg-white rounded rounded lg flex justify-center items-center flex-col p-3 space-y-3 shadow shadow-sm ${className}`}>
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

export default UserCard;

export const ActiveUser = () => {
  return <div className=""></div>;
};

export const DeactivatedUser = () => {
  return <div className=""></div>;
};
