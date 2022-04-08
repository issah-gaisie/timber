import React from "react";
import { RiAddLine } from "react-icons/ri";
import { Link, Outlet, useLocation, useRoutes } from "react-router-dom";
import GoBack from "../sub-components/GoBack";

const Warehouse = () => {
  return (
    <div className="w-full h-full  flex flex-col items-start">
      <WarehouseHeader />
      <Outlet />
    </div>
  );
};

export default Warehouse;

const WarehouseHeader = () => {
  const { pathname } = useLocation();
  const onAll = pathname === "/dashboard/warehouse/all";
  return (
    <>
      {onAll ? (
        <div className="w-full  flex justify-between items-center">
          <h1 className="text-4xl font-extrabold my-3 text-slate-700">
            Warehouses
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
      ) : null}
    </>
  );
};
