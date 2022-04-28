import React from "react";
import { Outlet } from "react-router-dom";
import { paymentRoutes } from "../../../utils";
import DashboardTabLink from "../sub-components/DashboardTabLink";

const Payment = () => {
  return (
    <div className="w-full h-full flex flex-col items-start">
      <h1 className="text-4xl font-extrabold my-3 mb-6  text-slate-700">
        Payment
      </h1>
      <nav className="w-full text-left py-5 border-b border-gray-300 mb-2 flex flex-wrap">
        {paymentRoutes.map((route) => (
          <DashboardTabLink {...route} />
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Payment;
