import React from "react";
import Input from "./Input";
import toast from "react-hot-toast";

const Signup = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
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

    toast.promise(loginPromise, {
      loading: "Loading",
      success: "Logged In Successfully",
      error: "Error Login failed",
    });
  };
  return (
    <form className="w-full  md:w-[30rem] flex flex-col space-y-5" onSubmit={hand}>
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
      <label className="block">
        <span className="block text-md font-medium text-gray-700 mb-3">
          Repeat Password
        </span>
        <Input placeholder="Repeat Password" type="password" />
      </label>
      <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 my-3 rounded rounded-md">
        Signup to Timberland
      </button>
    </form>
  );
};

export default Signup;
