import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
const PasswordResetSent = () => {
  let [params] = useSearchParams();
  let email = params.get("email");
  return (
    <div className="h-screen w-screen p-6 flex flex-col space-y-5 justify-center items-center">
      <div className="flex justify-center items-center h-40 w-40 rounded rounded-full bg-[#D3F3BE]">
        <AiFillLock className="text-7xl text-[#4B971C]" />
      </div>
      <span className="block text-center  md:text-lg font-medium text-gray-500 ">
        An Email to reset your password has been sent to
      </span>
      <span className="font-bold text-[#3e7c17] block px-6 text-center py-2 bg-[#D3F3BE] rounded rounded-lg">
        {email}
      </span>
      <Link to="/login">
        <button className="w-full md:w-[25rem] py-3 my-3 bg-[#3e7c17] text-white font-semibold rounded rounded-md">
          Go to Login
        </button>
      </Link>
    </div>
  );
};

export default PasswordResetSent;
