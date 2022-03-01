import React from "react";
import Input from "./Input";

const Login = () => {
  return (
    <div className="w-full  md:w-[30rem] flex flex-col space-y-5">
      <label  className="block">
        <span className="block text-md font-medium text-gray-700 mb-3">
          Email Address
        </span>
        <Input placeholder="Email Address" type="email" />
      </label>
      <label className="block">
        <span className="block text-md font-medium text-gray-700 mb-3">
          Password
        </span>
        <Input placeholder="Password" type="password" />
      </label>
      <button className="w-full bg-indigo-600 hover:bg text-white font-semibold py-2 my-3 rounded rounded-md">
        Login to Timberland
      </button>
    </div>
  );
};

export default Login;
