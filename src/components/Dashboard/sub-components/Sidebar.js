import React from "react";
import { RiShutDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { dashboardNavigation } from "../../../utils";
const Sidebar = () => {
  return (
    <nav className="h-full bg-white shadow-xs min-w-[4rem] basis-[10%] flex-col items-center justify-between h-full overflow-auto  hidden md:flex">
      <div className="flex flex-col justify-center space-y-10 pt-10">
        {dashboardNavigation.map((navItem, index) => (
          <NavLink key={index} to={navItem.path} className="group">
            {({ isActive }) => (
              <div className="flex flex-col items-center space-y-2 w-32">
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

                <h2 className={"text-center"}>{navItem.name}</h2>
              </div>
            )}
          </NavLink>
        ))}
      </div>

      <div className=" flex justify-center items-center bg-red-700 hover:bg-red-900 p-2 rounded rounded-full mt-20 mb-10">
        <RiShutDownLine className="text-2xl text-white" />
      </div>
    </nav>
  );
};

export default Sidebar;
