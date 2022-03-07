import React from "react";
import logo from "../../assets/TCL2.png";
import { FaAngleDown } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100">
      <div className="flex justify-between items-center h-14 shadow-sm bg-white px-6">
        <img src={logo} alt="tcl" className="h-10 w-auto object-contain" />
        <div className="flex justify-center items-center space-x-2">
          <div className="h-8 w-8 rounded rounded-full bg-green-700"></div>
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


c