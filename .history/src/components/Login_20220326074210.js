import React, { useEffect, useState } from "react";
import Input from "./Input";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  // handler for changing form values
  const handleChange = (e) => {
    const { value, id } = e.target;
    setState({
      ...state,
      [id]: value,
    });
  };

  // handler for login
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

  // state sideeffect
  useEffect(() => {
    console.log({ state });
  }, [state]);
  return (
    <form
      className="w-full  md:w-[30rem] flex flex-col space-y-5"
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold text-left text-gray-800 text-2xl md:text-3xl mb-6">
        Sign In
      </h1>
      <label className="block">
        <span className="block text-md font-medium text-gray-700 mb-3">
          Email Address
        </span>
        <Input
          placeholder="Email Address"
          id="email"
          type="email"
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <label className="block flex flex-col">
        <span className="block text-md font-medium text-gray-700 mb-3">
          Password
        </span>
        <Input
          placeholder="Password"
          id="password"
          type="password"
          value={state.password}
          onChange={handleChange}
        />
        <Link
          to={`/password-reset-sent?email=${state.email}`}
          className="self-end text-sm text-blue-600 hover:underline mt-2 "
        >
          Forgot Password?
        </Link>
      </label>
      <button
        type="submit"
        className="w-full bg-[#3e7c17]  hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md"
      >
        Login to Timberland
      </button>
    </form>
  );
};

export default Login;
