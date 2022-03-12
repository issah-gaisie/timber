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
    name: "Profile",
    IconFilled: (props) => <RiSettings5Fill {...props} />,
    Icon: (props) => <RiSettings5Line {...props} />,
    path: "profile",
  },
];

export const profileRoutes = [
  {
      name: 'Personal Details',
      path: 'personal-details'
  },
  {
      name: 'Change Password',
      path: 'change-password'
  }

]

export const userRoutes = [
  {
      name: 'All Users',
      path: 'all'
  },
  {
      name: 'Active Users',
      path: 'active'
  },
  {
      name: 'Deactivated Users',
      path: 'deactivated'
  },
  

]


export const testUsers=[
  {
    firstName : "Issah",
    lastName : "Muniru",
    role : "Admin",
    profileImage : manCTimber,
    active : false,
  }
]
