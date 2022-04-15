import React, { useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaRegBell,
  FaBell,
  FaTimesCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const NotificationDropdown = ({ visible, hide }) => {
  let list = ["A tree added", "An order made"];
  const navigate = useNavigate();
  const goToNotifications = async () => {
    await hide();
    navigate("/dashboard/notifications");
  };
  return (
    <div
      hidden={!visible}
      className={`w-96  absolute p-3 top-[140%] right-0 h-30 bg-white border border-gray-300 rounded rounded-md shadow-md z-40`}
    >
      <div className="w-full flex justify-end text-xl mb-2">
        <button onClick={hide} className="text-black">
          <FaTimesCircle />
        </button>
      </div>
      {list.length > 0 ? <Notifications list={list} /> : <NoNotifications />}
      {list.length > 0 && (
        <button
          className="w-full py-2 text-white bg-tclPrimary rounded rounded-md mt-4"
          onClick={goToNotifications}
        >
          See More
        </button>
      )}
    </div>
  );
};

export default NotificationDropdown;

const NoNotifications = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-3">
      <FaBell />
      <span className="noHeading">No Notifications</span>
      <span className="noContent">
        All your TCL <br />
        notifications will show up here.
      </span>
    </div>
  );
};

const Notifications = ({ list }) => {
  return (
    <div className="w-full">
      {list.map((listItem, index) => (
        <NotificationItem key={index} item={listItem} />
      ))}
    </div>
  );
};

const NotificationItem = ({
  item = "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
}) => {
  return (
    <p className="w-full last:border-none rounded-t rounded-b-none last:rounded-t-none rounded-md last:rounded-b last:rounded-md border-b border-gray-300 p-2 text-gray-700 hover:bg-tclPrimary/20">
      {item}
    </p>
  );
};
