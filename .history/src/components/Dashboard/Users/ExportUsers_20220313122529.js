import React, { useState } from "react";

const userTypes = ["all", "active", "deactivated"];
const fileTypes = ["pdf", "excel"];
const ExportUsers = () => {
  const [state, setState] = useState({
    userType: "all",
    fileType: "pdf",
  });
  return (
    <div className="p-3">
      <h2 className="text-2xl font-bold text-gray-700">Export Users</h2>
      <form className="flex flex-col space-y-3">
        <h2 className="text-2xl font-bold text-gray-700">Select </h2>
          <OptionGroup list={userTypes} />
      <h2 className="text-2xl font-bold text-gray-700">Export Users</h2>

          <OptionGroup list={fileTypes} />

      </form>
    </div>
  );
};

export default ExportUsers;

const OptionGroup = ({ list }) => {
  return (
    <div className="flex space-x-2 items-center">
      {list.map((item, index) => (
        <OptionButton key={index} name={item} />
      ))}
    </div>
  );
};

const OptionButton = ({ name, onClick }) => {
  return (
    <button
      className="px-3 border border-lime-700 py-2 bg-lime-100 text-lime-700 hover:text-white hover:bg-lime-700"
      onClick={onClick}
    >
      {name}
    </button>
  );
};
