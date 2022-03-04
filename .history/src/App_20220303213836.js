import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Auth from "./components/Auth";
import { Toaster } from "react-hot-toast";
import PersonalDetails from "./components/Signup/PersonalDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="" element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />}>
            <Route path='personal-details' element={<PersonalDetails/>} />
            <Route path='address' element={} />
            <Route path='image' element={''} />

          </Route>
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
