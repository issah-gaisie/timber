import React from "react";
import { Link, Outlet } from "react-router-dom";
import { paymentRoutes } from "../../../utils";
import DashboardTabLink from "../sub-components/DashboardTabLink";
import { RiAddLine } from "react-icons/ri";
import GoBack from "../sub-components/GoBack";

const Payment = () => {
  const tabPaths = paymentRoutes.map(
    ({ path }) => `/dashboard/payments/${path}`
  );
  const { pathname } = useLocation();
  const headerComponent = useMemo(
    () => (tabPaths.includes(pathname) ? <PaymentHeader /> : <GoBack />),
    [pathname]
  );

  return (
    <div className="w-full h-full flex flex-col items-start">
      {headerComponent}
      <Outlet />
    </div>
  );
};

export default Payment;

const PaymentHeader = () => {
  return (
    <>
      <div className="w-full  flex justify-between items-center">
        <h1 className="text-4xl font-extrabold my-3 text-slate-700">
          Payments
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
      <nav className="w-full text-left py-5 border-b border-gray-300 mb-2 flex flex-wrap">
        {paymentRoutes.map((route) => (
          <DashboardTabLink {...route} />
        ))}
      </nav>
    </>
  );
};
