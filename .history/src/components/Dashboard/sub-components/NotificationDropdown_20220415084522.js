import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaRegBell, FaBell } from "react-icons/fa";

const NotificationDropdown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="fixedHeaderWrapper">
      <div
        className="fixedHeaderNotificationIcon"
        style={{ backgroundImage: `url(${notificationIcon})` }}
        onClick={toggle}
      ></div>

      <div
        hidden={!showMenu}
        className={`fixedHeaderNotificationDropdownMenu ${
          list.length === 0 ? "notificationCentered" : ""
        }`}
      >
        {list.length > 0 ? <Notifications list={list} /> : <NoNotifications />}
      </div>
    </div>
  );
};

export default NotificationDropdown;

const NoNotifications = () => {
  return (
    <div className="noNotificationsWrapper">
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
