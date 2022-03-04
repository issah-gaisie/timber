import React from "react";
import { useSearchParams } from "react-router-dom";
import {AiFillLock} from 'react-icons/ai'
const PasswordSent = () => {
  let [params] = useSearchParams();
  let email = params.get("email");
  return (
    <div className="h-screen w-screen p-6 flex flex-col space-x-5 justify-center items-center">
      .flex.justify-center.items-center.h-40.w-40.
      <span className="text-lg ">
        Password Has Been Sent to{" "}
        <span className="font-bold text-indigo-700">{email}</span>
      </span>
      <button className="w-full md:w-[25rem] py-3 my-3 bg-indigo-700 text-white font-semibold rounded rounded-md">
        Go to Login
      </button>
    </div>
  );
};

export default PasswordSent;
