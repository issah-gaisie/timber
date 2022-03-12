import React from "react";
import { t, NavLink } from "react-router-dom";

const DashboardTabLink = (props) => {
  return (
    <NavLink
      to={props.path}
      className={({ isActive }) =>
        isActive
          ? "p-2 rounded rounded-md bg-[#DEF6D0] text-[#4B971C] text-sm mr-2 font-medium"
          : "p-2 rounded rounded-md hover:bg-[#DEF6D0] text-gray-500 hover:text-[#4B971C] text-sm mr-2 font-medium"
      }
    >
      {props.name}
    </NavLink>
  );
};

export default DashboardTabLink;
