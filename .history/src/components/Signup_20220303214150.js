import React from "react";
import Input from "./Input";
import toast from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // dummy signup promise
    const signupPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Signed up Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // toast handler for signup
    toast.promise(signupPromise, {
      loading: "Creating Account",
      success: "Signed up Successfully",
      error: "Error Signup failed",
    });
  };
  return (
   <>
   <Outlet/></>
  );
};

export default Signup;
