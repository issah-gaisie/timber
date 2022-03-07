//Dashboard Component

import React, { useMemo, useState } from "react";
import logo from "../../assets/TCL2.png";
import profile from "../../assets/man_cutting_timber.jpg";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./sub-components/Sidebar";
import ProfilePopup from "./sub-components/ProfilePopup";
import FloatingBottomNavBar from "./sub-components/FloatingBottomNavBar";

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
      <header className="flex justify-between items-center h-16 shadow-sm bg-white px-2 md:px-6 relative">
        <img src={logo} alt="tcl" className="h-10 w-auto object-contain" />
        <div className="hidden justify-center items-center space-x-2 pointer md:flex">
          <div className="h-7 w-7 rounded rounded-full bg-green-700" style={{backgroundImage:`url(${profile})`}}></div>
          <span className="text-gray-700 text-sm font-semibold ml-3">Muniru Issah</span>
        </div>
      </header>
      {/* Dashboard Main */}
      <main className="flex w-full h-full relative">
        <Sidebar />
        <section className="w-full h-full bg-gray-100">
          <Outlet />
        </section>
        <FloatingBottomNavBar />
      </main>
    </div>
  );
};

export default Dashboard;
