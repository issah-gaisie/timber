import React from "react";
import Input from "./Input";
import toast from "react-hot-toast";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // dummy login promise
    const loginPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Logged In Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(loginPromise, {
      loading: "Logging In",
      success: "Logged In Successfully",
      error: "Error Login failed",
    });
  };
  return (
    <form
      className="w-full  md:w-[30rem] flex flex-col space-y-5"
      onSubmit={handleSubmit}
    >
      <label className="block">
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
      <button
        type="submit"
        className="w-full bg-[#3e7c17] hover:bg-[#3e7c17] text-white font-semibold py-3 my-3 rounded rounded-md"
      >
        Login to Timberland
      </button>
    </form>
  );
};

export default Login;
