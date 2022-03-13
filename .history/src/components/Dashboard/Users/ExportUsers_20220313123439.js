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
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Export Users</h2>
      <form className="flex flex-col space-y-3">
        <h2 className="text-lg font-medium text-gray-700">Select User Group</h2>
        <OptionGroup
          list={userTypes}
          onChange={(value) => setState({ ...state, userType: value })}
          currentValue={state.userType}
        />
        <h2
          className="text-lg font-medium text-gray-700"
          onChange={(value) => setState({ ...state, fileType: value })}
        >
          Select File Type
        </h2>
        <OptionGroup list={fileTypes} 
        
        />
      </form>
    </div>
  );
};

export default ExportUsers;

const OptionGroup = ({ list, onChange, currentValue }) => {
  return (
    <div className="flex space-x-2 items-center">
      {list.map((item, index) => (
        <OptionButton
          key={index}
          name={item}
          onClick={() => onChange(item)}
          isActive={currentValue === item}
        />
      ))}
    </div>
  );
};

const OptionButton = ({ name, onClick, isActive }) => {
  return (
    <button
      className={`px-3 border border-lime-700 uppercase py-1.5 rounded rounded-lg bg-lime-100  hover:text-white hover:bg-lime-700 ${
        isActive ? "bg-lime-700 text-white" : "text-lime-700"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
