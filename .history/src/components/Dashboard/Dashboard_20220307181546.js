import React, { useMemo, useState } from "react";
import logo from "../../assets/TCL2.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
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
          className="group hover:ring-2 hover:ring-green-700/25 hover:p-1 rounded rounded-md flex justify-center items-center space-x-2 pointer relative"
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
    <div className="flex flex-col bg-white shadow-md absolute right-0 top-0 p-3 w-19">
      <button className="w-full py-2 hover:bg-green-700 hover:text-white">
        Settings
      </button>
      <button className="w-full py-2 bg-red-600 hover:bg-red-700 text-white hover:font-semibold">
        Logout
      </button>
    </div>
  );
};
