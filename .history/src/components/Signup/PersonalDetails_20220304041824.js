import React from "react";
import Input from "../Input";
const PersonalDetails = () => {
    const handleSubmit=
  return (
    <form className="w-full  md:w-[30rem] flex flex-col space-y-5">
      <label className="block">
        <span className="block text-md font-medium text-gray-700 mb-3">
          Username
        </span>
        <Input placeholder="Username" type="email" />
      </label>
      <label className="block">
        <span className="block text-md font-medium text-gray-700 mb-3">
          First Name
        </span>
        <Input placeholder="First Name" type="text" />
      </label>
      <label className="block">
        <span className="block text-md font-medium text-gray-700 mb-3">
          Last Name
        </span>
        <Input placeholder="Last Name" type="text" />
      </label>
      <label className="block">
        <span className="block text-md font-medium text-gray-700 mb-3">
          Email Address
        </span>
        <Input placeholder="Email Address" type="email" />
      </label>
      <label className="block">
        <span className="block text-md font-medium text-gray-700 mb-3">
          Phone Number
        </span>
        <Input placeholder="eg: 0505707987" type="tel" />
      </label>
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 my-3 rounded rounded-md"
      >
        Continue
      </button>
    </form>
  );
};

export default PersonalDetails;
