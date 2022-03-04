import React from "react";
import { useSearchParams } from "react-router-dom";

const PasswordSent = () => {
  let [params] = useSearchParams();
  let email = params.get("email");
  return <div className="h-screen w-screen p-6 flex flex-col justify-center items-center">
    Password Has Been Sent to {email}
    button.md:w-[30rem].py-2
  </div>;
};

export default PasswordSent;
