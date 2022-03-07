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
    IconFilled:(props)=>  <RiDashboardFill {...props}/>,
    Icon:(props)=>  <RiDashboardLine {...props}/>,
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
    IconFilled:(props)=>  <RiSettings5Fill {...props} />,
    Icon:(props)=>  <RiSettings5Line {...props}/>,
    path: "dashboard",
  },
  
];
