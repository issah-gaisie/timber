import React from "react";
import { Outlet } from "react-router-dom";
const Treefells = () => {
  return (
    <div className="w-full h-full  flex flex-col items-start">
    <h1 className="text-4xl font-extrabold my-3 text-slate-700">Treefells</h1>
    {/* <nav className="w-full text-left py-5 border-b border-gray-300 mb-2 flex flex-wrap">
      {profileRoutes.map((route) => (
        <DashboardTabLink {...route} />
      ))}
    </nav> */}
    <Outlet />
  </div>
  )
}

export default Treefells