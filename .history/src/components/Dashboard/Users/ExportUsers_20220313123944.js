import React, { useState } from "react";
import toast from "react-hot-toast";

const userTypes = ["all", "active", "deactivated"];
const fileTypes = ["pdf", "excel"];
const ExportUsers = () => {
  const [state, setState] = useState({
    userType: "all",
    fileType: "pdf",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const createUserPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "User Exported Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(createUserPromise, {
      loading: "Exporting Users",
      success: "Users Exported Successfully",
      error: "Users Export Failed",
    });
  };
  return (
    <div className="p-3">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Export Users</h2>
      <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
        <h2 className="text-lg font-medium text-gray-700">Select User Group</h2>
        <OptionGroup
          list={userTypes}
          onChange={(value) => setState({ ...state, userType: value })}
          currentValue={state.userType}
        />
        <h2 className="text-lg font-medium text-gray-700">Select File Type</h2>
        <OptionGroup
          list={fileTypes}
          onChange={(value) => setState({ ...state, fileType: value })}
          currentValue={state.fileType}
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
      type="button"
      className={`px-4 font-medium border border-green-700 uppercase py-1.5 rounded rounded-lg   hover:text-white hover:bg-green-700 ${
        isActive ? "bg-green-700 text-white" : "text-green-700 bg-green-100"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
