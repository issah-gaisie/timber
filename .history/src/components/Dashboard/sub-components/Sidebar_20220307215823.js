import React from "react";
import { RiShutDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { dashboardNavigation } from "../../../utils";
const Sidebar = () => {
  return (
    <nav className="h-full bg-white shadow-xs min-w-[4rem] basis-[5%] flex-col items-center justify-center pt-10 hidden md:flex">
      {dashboardNavigation.map((navItem, index) => (
        <NavLink key={index} to={navItem.path} className="group">
          {({ isActive }) => (
            <>
              <navItem.Icon
                className={
                  isActive
                    ? "hidden"
                    : "text-3xl text-gray-600 group-hover:hidden"
                }
              />

              <navItem.IconFilled
                className={
                  isActive
                    ? "text-3xl text-lime-700"
                    : "hidden text-3xl text-lime-700 group-hover:block"
                }
              />
            </>
          )}
        </NavLink>
      ))}
      <div className=" flex justify-center items-center bg-red-700 hover:bg-red-900 p-2 rounded rounded-full  sle">
        <RiShutDownLine className="text-2xl text-white" />
      </div>
    </nav>
  );
};

export default Sidebar;
