import {
  RiDashboardFill,
  RiDashboardLine,
  RiSettings5Fill,
  RiSettings5Line,
} from "react-icons/ri";
import { HiUsers, HiOutlineUsers } from "react-icons/hi";
// sidebar utils
export const dashboardNavigation = [
  {
    name: "Dashboard",
    IconFilled: (props) => <RiDashboardFill {...props} />,
    Icon: (props) => <RiDashboardLine {...props} />,
    path: "",
  },
  {
    name: "Users",
    IconFilled: (props) => <HiUsers {...props} />,
    Icon: (props) => <HiOutlineUsers {...props} />,
    path: "users",
  },
  {
    name: "Settings",
    IconFilled: (props) => <RiSettings5Fill {...props} />,
    Icon: (props) => <RiSettings5Line {...props} />,
    path: "settings",
  },
];

