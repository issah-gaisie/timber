import React from "react";
import { useSearchParams } from "react-router-dom";

const PasswordSent = () => {
  let [params] = useSearchParams();
  let email = params.get("email");
  return <div className="h-screen w-screen p-6 flex flex-col justify-center items-center">
    Password Has Been Sent to {email}
    button.w-full.md:w-[30rem].py-2.my-3.bg-indigo-700.text-white.font-semibold
  </div>;
};

export default PasswordSent;
