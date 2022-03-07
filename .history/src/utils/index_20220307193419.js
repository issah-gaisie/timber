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
    IconFilled:(props)=>  <RiDashboardFill/>,
    Icon:(props)=>  <RiDashboardLine/>,
    path: "dashboard",
  },
  {
    name: "Users",
    IconFilled:(props)=>  <HiUsers/>,
    Icon:(props)=> <HiOutlineUsers {...props}/>,
    path: "dashboard",
  },
  {
    name: "Settings",
    IconFilled:(props)=>  <RiSettings5Fill {} />,
    Icon:(props)=>  <RiSettings5Line/>,
    path: "dashboard",
  },
  
];
