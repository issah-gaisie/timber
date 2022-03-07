import React from "react";
import logo from "../../assets/TCL2.png";
const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100">
      <div className="flex justify-between items-center h-14 shadow-sm bg-white px-6">
        <img src={logo} alt="tcl" className="h-10 w-auto object-contain" />
        <div className="flex justify-center items-center">
            .h-12.w-12.rounded.rounded-full.bg-green-700
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
