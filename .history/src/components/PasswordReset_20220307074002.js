import React from "react";
import Input from "./Input";
import toast from "react-hot-toast";
const PasswordReset = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // dummy login promise
    const resetPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Password reset Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(resetPromise, {
      loading: "Resetting your password",
      success: "Password reset Successfully",
      error: "Error Login failed",
    });
  };
  return (
    <form
      className="w-full  md:w-[30rem] flex flex-col space-y-5"
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold text-left text-gray-800 text-2xl md:text-3xl mb-6">
        Password 
      </h1>
      <label className="block">
        <span className="block text-md font-medium text-gray-700 mb-3">
          New Password
        </span>
        <Input placeholder="New Password" type="password" />
      </label>
      <label className="block">
        <span className="block text-md font-medium text-gray-700 mb-3">
          Confirm Password
        </span>
        <Input placeholder="Confirm Password" type="password" />
      </label>
      <button
        type="submit"
        className="w-full bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md"
      >
        Reset Password
      </button>
    </form>
  );
};

export default PasswordReset;
