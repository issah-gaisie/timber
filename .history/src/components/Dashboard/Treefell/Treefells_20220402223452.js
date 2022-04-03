import React from "react";
import { RiAddLine } from "react-icons/ri";
import { Link, Outlet, useLocation, useRoutes } from "react-router-dom";

const Treefells = () => {
  const { pathname } = useLocation();
  console.log({pathname})
  return (
    <div className="w-full h-full  flex flex-col items-start">
      <TreeFellsHeader />
      <Outlet />
    </div>
  );
};

export default Treefells;

const TreeFellsHeader = () => {
  return (
    <>
      <div className="w-full  flex justify-between items-center">
        <h1 className="text-4xl font-extrabold my-3 text-slate-700">
          TreeFells
        </h1>
        <div className="flex items-center">
          <Link
            to="add"
            className="rounded rounded-full p-2 shadow-lg bg-[#3e7c17] hover:bg-[#356C14] mr-2"
          >
            <RiAddLine className="text-lg text-white" />
          </Link>
        </div>
      </div>
    </>
  );
};
