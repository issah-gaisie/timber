import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import {AiFillLock} from 'react-icons/ai'
const PasswordSent = () => {
  let [params] = useSearchParams();
  let email = params.get("email");
  return (
    <div className="h-screen w-screen p-6 flex flex-col space-y-5 justify-center items-center">
      <div className="flex justify-center items-center h-40 w-40 rounded rounded-full bg-indigo-100">
        <AiFillLock className="text-7xl text-indigo-500"  />
      </div>
      <span className="block text-center  md:text-lg font-medium text-gray-600 ">
        Your temporary password has been sent to{" "}
      </span>
      <span className="font-bold text-indigo-700 ">{email}</span>
      <Link>
      <button className="w-full md:w-[25rem] py-3 my-3 bg-indigo-700 text-white font-semibold rounded rounded-md">
        Go to Login
      </button>
      </Link>
    </div>
  );
};

export default PasswordSent;
