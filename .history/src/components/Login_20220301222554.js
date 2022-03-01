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
      <label className="block">
        <span className="block text-md font-medium text-gray-700 ">
          Password
        </span>
        <Input placeholder="Password" type="password" />
      </label>
      <button className="w-full bg-blue-700 text-white font-semibold py-3 ">
          Login to Timberland
      </button>
    </div>
  );
};

export default Login;
