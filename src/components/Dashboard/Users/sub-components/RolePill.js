import React from "react";

const RolePill = (props) => {
  const { role = "Admin" } = props;
  return (
    <div className="group flex items-center h-9 rounded rounded-full bg-gray-400 hover:bg-gray-500 p-1 font-bold text-white shadow-md transition ease-in-out">
      <div className="rounded rounded-full group-hover:bg-gray-700 bg-gray-500 text-white h-7 w-7 flex justify-center items-center block ">{role[0]}</div>
      <span className="px-1.5">{role}</span>
    </div>
  );
};

export default RolePill;
