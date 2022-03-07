import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Auth from "./components/Auth";
import { Toaster } from "react-hot-toast";
// signup step routes
import PersonalDetails from "./components/Signup/PersonalDetails";
import AddressInfo from "./components/Signup/AddressInfo";
import ImageFiles from "./components/Signup/ImageFiles";
import PasswordSent from "./components/Signup/PasswordSent";
import PasswordReset from "./components/ResetPassword/PasswordReset";
import PasswordResetSent from "./components/ResetPassword/PasswordResetSent";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="" element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="password-reset" element={<PasswordReset />} />
          <Route path="password-reset-sent" element={<PasswordResetSent />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

// OLD SIGN UP ROUTES

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
