import {
  RiDashboardFill,
  RiDashboardLine,
  RiSettings5Fill,
  RiSettings5Line,
} from "react-icons/ri";
import {HiUsers,HiOutlineUsers} from 'react-icons/hi'
// sidebar utils
const Sidebar = [
  {
    name: "Dashboard",
    IconFilled: <RiDashboardFill/>,
    Icon: <RiDashboardLine/>,
    path: "dashboard",
  },
  {
    name: "Users",
    IconFilled: <HiUsers/>,
    Icon:(props)=> <HiOutlineUsers />,
    path: "dashboard",
  },
  {
    name: "Settings",
    IconFilled: <RiSettings5Fill/>,
    Icon: <RiSettings5Line/>,
    path: "dashboard",
  },
  
];
