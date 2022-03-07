import React from "react";
import { RiShutDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { dashboardNavigation } from "../../../utils";

const FloatingBottomNavBar = () => {
  return (
    <nav className="flex w-full  items-center justify-around bg-white shadow-sm absolute bottom-10  m-auto">
      {dashboardNavigation.map((navItem, index) => (
        <NavLink key={index} to={navItem.path} className="group">
          {({ isActive }) => (
            <>
              <navItem.Icon
                className={
                  isActive
                    ? "hidden"
                    : "text-xl text-gray-600 group-hover:hidden"
                }
              />

              <navItem.IconFilled
                className={
                  isActive
                    ? "text-xl text-lime-700"
                    : "hidden text-xl text-lime-700 group-hover:block"
                }
              />
            </>
          )}
        </NavLink>
      ))}
      {/* <div className="w-full flex justify-center items-center bg-red-700 hover:bg-red-900 py-2 justify-self-end">
        <RiShutDownLine className="text-3xl text-white" />
      </div> */}
    </nav>
  );
};

export default FloatingBottomNavBar;
