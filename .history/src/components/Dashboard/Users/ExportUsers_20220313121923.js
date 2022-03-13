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
      <form>

      </form>
    </div>
  );
};

export default ExportUsers;

const OptionGroup=()=>{

}

const OptionButton=()=>{
return(
    <button className="w-16 py-2 bg-lime-100 text-lime-700">

    </button>
);
}