import React, { useMemo } from "react";
import { Link, Outlet, useLocation, useRoutes } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import { userRoutes } from "../../../utils";
import DashboardTabLink from "../sub-components/DashboardTabLink";
import GoBack from "../sub-components/GoBack";
import { FaFileExport } from "react-icons/fa";
const Users = () => {
  const tabPaths = userRoutes.map(({ path }) => `/dashboard/users/${path}`);
  const { pathname } = useLocation();
  console.log({ pathname }, { tabPaths });
  const headerComponent = useMemo(
    () => (tabPaths.includes(pathname) ? <DashboardUsersHeader /> : <GoBack />),
    [pathname]
  );
  return (
    <div className="w-full h-full p-6 flex flex-col items-start">
      {headerComponent}
      <Outlet />
    </div>
  );
};

export default Users;

const DashboardUsersHeader = () => {
  return (
    <>
      <div className="w-full  flex justify-between items-center">
        <h1 className="text-4xl font-extrabold my-3 text-slate-700">Users</h1>
        <div className="flex items-center">
          <Link
            to="add"
            className="rounded rounded-full p-2 shadow-lg bg-[#3e7c17] hover:bg-[#356C14]"
          >
            <RiAddLine className="text-lg text-white" />
          </Link>
          <Link
            to="add"
            className="rounded rounded-full p-2 shadow-lg bg-[#3e7c17] hover:bg-[#356C14]"
          >
            <FaFileExport className="text-lg text-" />
          </Link>
        </div>
      </div>
      <nav className="w-full text-left py-4 border-b border-gray-300/25 mb-3 flex flex-wrap">
        {userRoutes.map((route, index) => (
          <DashboardTabLink key={index} {...route} />
        ))}
      </nav>
    </>
  );
};
