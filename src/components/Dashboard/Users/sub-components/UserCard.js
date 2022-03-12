import React from "react";
import manCTimber from "../../../../assets/man_cutting_timber.jpg";
import { GrView } from "react-icons/gr";
const UserCard = (props) => {
  const {
    firstName = "Issah",
    lastName = "Muniru",
    role = "Admin",
    profileImage = manCTimber,
    active = false,
  } = props;

  const viewUser=()=>{
    
  }
  return (
    <div
      className={`bg-white rounded rounded-2xl flex justify-center items-center flex-col py-4 px-3  shadow shadow-sm hover:shadow-lg cursor-pointer `}
    >
      {/* image and role section */}
      <div className="h-16 w-16 relative mb-5">
        <img
          src={profileImage}
          alt=""
          className="object-cover rounded rounded-full h-full w-full"
        />
        {active ? (
          <span className="w-full block text-center absolute -bottom-1 uppercase rounded rounded-full bg-[#DEF6D0] text-[#4B971C]/50 font-medium px-2 text-[0.7rem]">
            Active
          </span>
        ) : (
          <span className="w-full block text-center absolute -bottom-1 uppercase rounded rounded-full bg-red-200 text-red-800/50 font-medium px-2 text-[0.7rem]">
            Disabled
          </span>
        )}
      </div>
      {/* Name */}
      <h2 className="font-semibold text-gray-600">
        {firstName} {lastName}
      </h2>
      <h2 className="text-gray-500  font-thin block">{role}</h2>
      {/* {active ? (
        <span className="text-green-600 font-medium">Active</span>
      ) : (
        <span className="text-red-600 font-medium">Deactivated</span>
      )} */}
    </div>
  );
};

export default UserCard;
