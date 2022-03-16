import React from "react";
import { Outlet } from "react-router-dom";
import { sto, stockRoutesckRoutes } from "../../../utils";
import DashboardTabLink from "../sub-components/DashboardTabLink";

const StockManagement = () => {
  return (
    <div className="w-full h-full p-6 flex flex-col items-start">
      <h1 className="text-4xl font-extrabold my-3 text-slate-700">Stock Management</h1>
      <nav className="w-full text-left py-5 border-b border-gray-300 mb-2 flex flex-wrap">
        {stockRoutes.map((route) => (
          <DashboardTabLink {...route} />
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default StockManagement;
