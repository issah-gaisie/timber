import React from "react";
import { RiAddLine } from "react-icons/ri";
import { Outlet } from "react-router-dom";
const Treefells = () => {
  return (
    <div className="w-full h-full  flex flex-col items-start">
    <h1 className="text-4xl font-extrabold my-3 text-slate-700">TreeFells</h1>
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


const DashboardUsersHeader = () => {
    return (
      <>
        <div className="w-full  flex justify-between items-center">
          <h1 className="text-4xl font-extrabold my-3 text-slate-700">Users</h1>
          <div className="flex items-center">
            <Link
              to="add"
              className="rounded rounded-full p-2 shadow-lg bg-[#3e7c17] hover:bg-[#356C14] mr-2"
            >
              <RiAddLine className="text-lg text-white" />
            </Link>
            <Link to="export" className="p-2">
              <AiOutlineFilePdf className="text-xl text-gray-700" />
            </Link>
          </div>
        </div>
        {/* <nav className="w-full text-left py-4 border-b border-gray-300/25 mb-3 flex flex-wrap">
          {userRoutes.map((route, index) => (
            <DashboardTabLink key={index} {...route} />
          ))}
        </nav> */}
      </>
    );
  };
  