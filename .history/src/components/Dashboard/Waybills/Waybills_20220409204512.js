import React from "react";
import { Outlet } from "react-router-dom";
import { stockRoutes } from "../../../utils";
import DashboardTabLink from "../sub-components/DashboardTabLink";
import { LabelAndValue } from "../DashboardMain";
import { useState } from "react";

const Waybills = () => {
  return (
    <div className="w-full h-full flex flex-col items-start">
      <h1 className="text-4xl font-extrabold my-3 mb-6  text-slate-700">
        Waybills
      </h1>
      <nav className="w-full text-left py-5 border-b border-gray-300 mb-2 flex flex-wrap">
        {stockRoutes.map((route) => (
          <DashboardTabLink {...route} />
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Waybills;
