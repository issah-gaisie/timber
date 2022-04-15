import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaRegBell, FaBell } from "react-icons/fa";

const NotificationDropdown = ({ visible, toggle }) => {
  let list = ["A tree added"];
  return (
    <div hidden={!visible} className={`w-60`}>
      {list.length > 0 ? <Notifications list={list} /> : <NoNotifications />}
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
    <div className="w-full p-3">
      {list.map((listItem, index) => (
        <NotificationItem key={index} item={listItem} />
      ))}
    </div>
  );
};

const NotificationItem = ({
  item = "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
}) => {
  return <p className="w-full last:border-none border-b border-gray-700"></p>;
};
