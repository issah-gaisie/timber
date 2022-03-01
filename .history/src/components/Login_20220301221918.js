import React from "react";
import Input from "./Input";

const Login = () => {
  return (
    <div className="w-full">
      <Input placeholder='Email Address' />
      <Input placeholder='Password'  />
    </div>
  );
};

export default Login;
