import React from "react";
import Input from "./Input";

const Login = () => {
  return (
    <div className="w-full">
        <label htmlFor="" className="block">
        <Input placeholder='Email Address' type="email" />

        </label>
      <Input placeholder='Password' type='password' />
    </div>
  );
};

export default Login;
