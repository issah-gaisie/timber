import {
  RiDashboardFill,
  RiDashboardLine,
  RiSettings5Fill,
  RiSettings5Line,
  RiDatabaseFill,
  RiDatabaseLine,
} from "react-icons/ri";
import { HiUsers, HiOutlineUsers } from "react-icons/hi";
import manCTimber from "../assets/man_cutting_timber.jpg";
// sidebar utils
export const dashboardNavigation = [
  {
    name: "Dashboard",
    IconFilled: (props) => <RiDashboardFill {...props} />,
    Icon: (props) => <RiDashboardLine {...props} />,
    path: "main",
  },
  {
    name: "Users",
    IconFilled: (props) => <HiUsers {...props} />,
    Icon: (props) => <HiOutlineUsers {...props} />,
    path: "users",
  },
  {
    name: "Stock Management",
    IconFilled: (props) => <RiDatabaseFill {...props} />,
    Icon: (props) => <RiDatabaseLine {...props} />,
    path: "stock-management",
  },
  {
    name: "Profile",
    IconFilled: (props) => <RiSettings5Fill {...props} />,
    Icon: (props) => <RiSettings5Line {...props} />,
    path: "profile",
  },
];

// ROUTES FOR THE PROFILE SECTION  IN THE DASHBOARD 
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
  {
    name: "Client Users",
    path: "client",
  },
  {
    name: "Internal Users",
    path: "internal",
  },
];

export const stockRoutes = [
  {
    name: "Concession",
    path: "concession",
  },
  {
    name: "Compartment",
    path: "compartment",
  },
  {
    name: "Species",
    path: "species",
  },
  {
    name: "Trees",
    path: "trees",
  },
  {
    name: "Teams",
    path: "teams",
  },
  {
    name: "Products",
    path: "products",
  },
];

// test users
export const testUsers = [
  {
    id: 1,
    username: "Missah",
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
    id: 2,
    username: "ErnestGaisie",
    firstName: "Ernest",
    lastName: "Gaisie",
    email: "ernestgaisie@gmail.com",
    phoneNumber: "+23355234566",
    location: "Nungua",
    address1: "Nungua Barrier",
    address2: "Nungua Second",
    role: "Client User",
    profileImage: manCTimber,
    active: false,
  },
  {
    id: 3,
    username: "BotweIsaac",
    firstName: "Botwe",
    lastName: "Isaac",
    email: "botweisaac@gmail.com",
    phoneNumber: "+23355679905",
    location: "Labadi",
    address1: "Labadi Barrier",
    address2: "Labadi Second",
    role: "Internal User",
    profileImage: manCTimber,
    active: true,
  },
];

export const userRoles = {
  CLIENT: "Client User",
  INTERNAL: "Internal User",
  ADMIN: "Admin",
};

export const testConcessions = [
  {
    id: 1,
    concessionName: "concession1",
    concessionSize: "10sqm",
    description: "A large concession",
    totalNumberOfTrees: 2000,
    address: "Manet Palms",
    permitNumber: "123456",
    permitExpiryDate: new Date().toISOString(),
    permitDocument: ".docsx",
  },
  {
    id: 2,
    concessionName: "concession2",
    concessionSize: "10sqm",
    description: "A large concession",
    totalNumberOfTrees: 2000,
    address: "Manet Palms",
    permitNumber: "123456",
    permitExpiryDate: new Date().toISOString(),
    permitDocument: ".docsx",
  },
  {
    id: 3,
    concessionName: "concession3",
    concessionSize: "10sqm",
    description: "A large concession",
    totalNumberOfTrees: 2000,
    address: "Manet Palms",
    permitNumber: "123456",
    permitExpiryDate: new Date().toISOString(),
    permitDocument: ".docsx",
  },
  {
    id: 4,
    concessionName: "concession4",
    concessionSize: "10sqm",
    description: "A large concession",
    totalNumberOfTrees: 2000,
    address: "Manet Palms",
    permitNumber: "123456",
    permitExpiryDate: new Date().toISOString(),
    permitDocument: ".docsx",
  },
  {
    id: 5,
    concessionName: "concession5",
    concessionSize: "10sqm",
    description: "A large concession",
    totalNumberOfTrees: 2000,
    address: "Manet Palms",
    permitNumber: "123456",
    permitExpiryDate: new Date().toISOString(),
    permitDocument: ".docsx",
  },
];
