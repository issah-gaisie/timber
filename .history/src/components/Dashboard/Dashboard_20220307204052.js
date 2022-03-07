// Main Dashboard Component

import React, { useMemo, useState } from "react";
import logo from "../../assets/TCL2.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {
  RiSettings5Line,
  RiSettings5Fill,
  RiShutDownLine,
  RiShutDownFill,
} from "react-icons/ri";
import { dashboardNavigation } from "../../utils";
import { NavLink, Outlet, useLocation } from "react-router-dom";

// Side Bar Component
const SideBar = () => {
  return (
    <nav className="h-full bg-white shadow-xs basis-1/12 flex-col items-center justify-start space-y-10 pt-10 hidden md:flex">
      {dashboardNavigation.map((navItem,index) => (
        <NavLink key={index} to={navItem.path} className="group">
          {({ isActive }) => {
           
            
                {
                  <navItem.Icon className="text-4xl text-gray-600 group-hover:hidden" />
                }
                {
                  <navItem.IconFilled className="hidden text-4xl text-lime-700 group-hover:block" />
                }
              </>
            );
          }}
        </NavLink>
      ))}
      <div className="w-full flex justify-center items-center bg-red-700 hover:bg-red-900 py-2 justify-self-end">
        <RiShutDownLine className="text-3xl text-white" />
      </div>
    </nav>
  );
};

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
        {showPopup && <SettingsPopup />}
      </header>
      {/* Dashboard Main */}
      <main className="flex w-full h-full">
        <SideBar />
        <section className="w-full h-full bg-lime-100">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

// This is the component for the user profile popup
const SettingsPopup = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded rounded-lg absolute right-4 top-[125%] p-3 w-40 ">
      <div className="h-12 w-12 rounded rounded-full bg-green-700"></div>
      <div className="flex space-x-4 mt-4">
        <button className="group">
          <RiSettings5Line className="group-hover:hidden text-2xl text-gray-700" />
          <RiSettings5Fill className="hidden group-hover:block text-2xl text-gray-700" />
        </button>
        <button className="group">
          <RiShutDownLine className="group-hover:hidden text-2xl text-red-600" />
          <RiShutDownFill className="hidden group-hover:block text-2xl text-red-700" />
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
