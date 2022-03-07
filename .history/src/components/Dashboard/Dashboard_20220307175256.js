import React from "react";
import logo from "../../assets/logo.png"
const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100">
      <div className="flex justify-between items-center h-12 shadow-sm bg-white px-6">
      <img src={logo} alt="tcl" className="h-10 w-auto object-contain" />
      </div>
    </div>
  );
};

export default Dashboard;
