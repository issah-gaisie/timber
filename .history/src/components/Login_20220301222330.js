import React from "react";
import Input from "./Input";

const Login = () => {
  return (
    <div className="w-full">
      <label htmlFor="" className="block">
        <span className="block text-md font-medium text-gray-700 ">
          Email Address
        </span>
        <Input placeholder="Email Address" type="email" />
      </label>
      <label
      <Input placeholder="Password" type="password" />
    </div>
  );
};

export default Login;
