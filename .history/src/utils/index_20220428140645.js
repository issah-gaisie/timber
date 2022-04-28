import {
  RiDashboardFill,
  RiDashboardLine,
  RiSettings5Fill,
  RiSettings5Line,
  RiDatabaseFill,
  RiDatabaseLine,
  RiShoppingCartLine,
  RiShoppingCartFill,
} from "react-icons/ri";
import { FaWarehouse } from "react-icons/fa";
import { HiUsers, HiOutlineUsers } from "react-icons/hi";
import { BsTree } from "react-icons/bs";
import { AiOutlineFileSearch, AiFillFileText } from "react-icons/ai";
import { GiLogging } from "react-icons/gi";
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
    name: "Orders",
    IconFilled: (props) => <RiShoppingCartFill {...props} />,
    Icon: (props) => <RiShoppingCartLine {...props} />,
    path: "orders",
  },
  {
    name: "Tree Fell",
    IconFilled: (props) => <GiLogging {...props} />,
    Icon: (props) => <BsTree {...props} />,
    path: "tree-fell",
  },
  {
    name: "Stock Management",
    IconFilled: (props) => <RiDatabaseFill {...props} />,
    Icon: (props) => <RiDatabaseLine {...props} />,
    path: "stock-management",
  },
  {
    name: "Warehouse",
    IconFilled: (props) => <FaWarehouse {...props} />,
    Icon: (props) => <FaWarehouse {...props} />,
    path: "warehouse",
  },
  {
    name: "Waybills",
    IconFilled: (props) => <AiFillFileText {...props} />,
    Icon: (props) => <AiOutlineFileSearch {...props} />,
    path: "waybills",
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

// ROUTES FOR THE SETTINGS SECTION IN THE DASHBOARD
export const settingsRoutes = [
  {
    name: "Company's Info",
    path: "company-info",
  },
  {
    name: "Exchange Rate",
    path: "exchange-rate",
  },
];

// ROUTES FOR THE WAYBILL SECTION IN THE DASHBOARD
export const waybillRoutes = [
  {
    name: "History",
    path: "history",
  },
  {
    name: "Returns",
    path: "returns",
  },
];

// ROUTES FOR THE PAYMENT SECTION IN THE DASHBOARD
export const paymentRoutes = [
  {
    name: "All",
    path: "all",
  },
  {
    name: "Waybill and Order",
    path: "waybill-order",
  },
  {
    name: "User",
    path: "user",
  },
];

// ROUTES FOR THE USERS SECTION IN THE DASHBOARD
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

// ROUTES FOR STOCK MANAGEMENT IN THE DASHBOARD
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
  {
    name: "Product Types",
    path: "product-types",
  },
];

// TEST USERS
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

// DUMMY ROLES FOR USERS
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
