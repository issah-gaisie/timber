import React from "react";
import { useSearchParams } from "react-router-dom";

const PasswordSent = () => {
  let [params] = useSearchParams();
  let email = params.get("email");
  return (
    <div className="h-screen w-screen p-6 flex flex-col space-x-5 justify-center items-center">
      <span>Password Has Been Sent to <span>{email}</span></span>
      <button className="w-full md:w-[20rem] py-2 my-3 bg-indigo-700 text-white font-semibold rounded rounded-md">
        Go to Login
      </button>
    </div>
  );
};

export default PasswordSent;
