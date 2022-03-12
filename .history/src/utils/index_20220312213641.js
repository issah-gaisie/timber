import {
  RiDashboardFill,
  RiDashboardLine,
  RiSettings5Fill,
  RiSettings5Line,
} from "react-icons/ri";
import { HiUsers, HiOutlineUsers } from "react-icons/hi";
import manCTimber from '../assets/man_cutting_timber.jpg'
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
    name: "Personal Details",
    path: "personal-details",
  },
  {
    name: "Change Password",
    path: "change-password",
  },
];

export const userRoutes = [
  {
    name: "All Users",
    path: "all",
  },
  {
    name: "Active Users",
    path: "active",
  },
  {
    name: "Deactivated Users",
    path: "deactivated",
  },
];

export const testUsers = [
  {
    username:'Missah',
    firstName: "Issah",
    lastName: "Muniru",
    email: "issahmuniru@gmail.com",
    phoneNumber: "+23355345679",
    location: "Lakeside",
    address1: "Lakeside Barrier",
    address2: "Lakeside Second",
    role: "Admin",
    profileImage: manCTimber,
    active: false,
  },
  {
    username: "ErnestGaisie",
    firstName: "Ernest",
    lastName: "Gaisie",
    email: "ernestgaisie@gmail.com",
    phoneNumber: "+23355234566",
    location: "Nungua",
    address1: "Nungua Barrier",
    address2: "Nungua Second",
    role: "Admin",
    profileImage: manCTimber,
    active: false,
  }
];
