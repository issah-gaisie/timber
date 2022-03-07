import React, { useMemo, useState } from "react";
import logo from "../../assets/TCL2.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {
  RiSettings5Line,
  RiSettings5Fill,
  RiShutDownLine,
  RiShutDownFill,
} from "react-icons/ri";
const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup((previousState) => !previousState);

  const arrow = useMemo(
    () => (showPopup ? <FaAngleUp /> : <FaAngleDown />),
    [showPopup]
  );

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100">
      <div className="flex justify-between items-center h-14 shadow-sm bg-white px-6">
        <img src={logo} alt="tcl" className="h-10 w-auto object-contain" />
        <div
          className="flex justify-center items-center space-x-2 pointer relative"
          onClick={togglePopup}
        >
          <div className="h-8 w-8 rounded rounded-full bg-green-700"></div>
          {arrow}
          {showPopup && <SettingsPopup />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const SettingsPopup = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded rounded-lg absolute right-0 top-[125%] p-3 w-40 ">
      <div className="h-12 w-12 rounded rounded-full bg-green-700"></div>
      <div className="flex space-x-4 mt-4">
        <button className="group">
          <RiSettings5Line className="group-hover:hidden text-3xl" />
          <RiSettings5Fill className="hidden group-hover:block text-3xl" />
        </button>
        <button className="group">
          <RiShutDownLine className="group-hover:hidden text-3xl" />
          <RiShutDownFill className="hidden group-hover:block text-2xl" />
        </button>
      </div>

      {/* <button className="w-full py-1  rounded rounded-sm border border-[#D3F3BE] hover:bg-[#D3F3BE]  hover:text-lime-700 mb-2 ">
        Settings
      </button>
      <button className="w-full py-1 rounded rounded-sm bg-red-600 hover:bg-red-700 text-white hover:font-semibold">
        Logout
      </button> */}
    </div>
  );
};
