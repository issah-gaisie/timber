//Dashboard Component

import React, { useMemo, useState } from "react";
import logo from "../../assets/TCL2.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./sub-components/Sidebar";
import ProfilePopup from "./sub-components/ProfilePopup";

//Main Dashboard Component
const Dashboard = () => {
  const location = useLocation();
  console.log({ location });
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup((previousState) => !previousState);

  const arrow = useMemo(
    () => (showPopup ? <FaAngleUp /> : <FaAngleDown />),
    [showPopup]
  );

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100">
      {/* Dashboard Header */}
      <header className="flex justify-between items-center h-14 shadow-sm bg-white px-6 relative">
        <img src={logo} alt="tcl" className="h-10 w-auto object-contain" />
        <div
          className="flex justify-center items-center space-x-2 pointer"
          onClick={togglePopup}
        >
          <div className="h-8 w-8 rounded rounded-full bg-green-700"></div>
          {arrow}
        </div>
        {showPopup && <ProfilePopup />}
      </header>
      {/* Dashboard Main */}
      <main className="flex w-full h-full relative">
        <Sidebar />
        <section className="w-full h-full bg-lime-100">
          <Outlet />
        </section>
        
      </main>
    </div>
  );
};

export default Dashboard;
