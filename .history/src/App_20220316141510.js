import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

import Auth from "./components/Auth";
import { Toaster } from "react-hot-toast";

import PasswordReset from "./components/ResetPassword/PasswordReset";
import PasswordResetSent from "./components/ResetPassword/PasswordResetSent";
import Dashboard from "./components/Dashboard/Dashboard";
// Auth Wrapper
import PrivateRoute from "./components/PrivateRoute";
import Users from "./components/Dashboard/Users/Users";
import DashboardMain from "./components/Dashboard/DashboardMain";

// All Dashboard Profile Routes
import Profile from "./components/Dashboard/Profile/Profile";
import PersonalDetails from "./components/Dashboard/Profile/PersonalDetails";
import ChangePassword from "./components/Dashboard/Profile/ChangePassword";
import AllUsers from "./components/Dashboard/Users/AllUsers";
import ActiveUsers from "./components/Dashboard/Users/ActiveUsers";
import DeactivatedUsers from "./components/Dashboard/Users/DeactivatedUsers";
import AddANewUser from "./components/Dashboard/Users/AddANewUser";
import UserDetails from "./components/Dashboard/Users/UserDetails";
import EditUser from "./components/Dashboard/Users/EditUser";
import ExportUsers from "./components/Dashboard/Users/ExportUsers";
import StockManagement from "./components/Dashboard/StockManagement/StockManagement";

// All Dashboard Users Routes
function App() {
  return (
    <>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Auth />}>
          <Route path="" element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="password-reset" element={<PasswordReset />} />
          <Route path="password-reset-sent" element={<PasswordResetSent />} />
        </Route>
        {/* Dashboard Routes */}
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="main" replace />} />
          {/* Main Dashboard Page */}
          <Route path="main" element={<DashboardMain />} />
          {/* Admin Dashboard Users */}
          <Route path="users" element={<Users />}>
            <Route index element={<Navigate to="all" replace />} />
            <Route path="all" element={<AllUsers />} />
            <Route path="active" element={<ActiveUsers />} />
            <Route path="deactivated" element={<DeactivatedUsers />} />
            <Route path=":id" element={<UserDetails />} />
            <Route path=":id/edit" element={<EditUser />} />
            <Route path="add" element={<AddANewUser />} />
            <Route path="export" element={<ExportUsers />} />
          </Route>
          {/* Dashboard Profile Page */}
          <Route path="profile" element={<Profile />}>
            <Route index element={<Navigate to="personal-details" replace />} />
            <Route path="personal-details" element={<PersonalDetails />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
          {/* Dashboard Stock Management Page */}
          <Route path='stock-management' element={<StockManagement/>}>
          <Route index element={<Navigate to="concession-input" replace />} />
          <Route path="concession-input" element={<PersonalDetails />} />
            <Route path="change-password" element={<ChangePassword />} />

          </Route>
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

// OLD SIGN UP ROUTES
// import Signup from "./components/Signup";
// import PersonalDetails from "./components/Signup/PersonalDetails";
// import AddressInfo from "./components/Signup/AddressInfo";
// import ImageFiles from "./components/Signup/ImageFiles";
// import PasswordSent from "./components/Signup/PasswordSent";

// <Route path="signup" element={<Signup />}>
// <Route
//   path=""
//   element={<Navigate replace to="personal-details" />}
// />
// <Route path="personal-details" element={<PersonalDetails />} />
// <Route path="address" element={<AddressInfo />} />
// <Route path="image" element={<ImageFiles />} />
// </Route>
/* <Route path="password-sent" element={<PasswordSent />} /> */
