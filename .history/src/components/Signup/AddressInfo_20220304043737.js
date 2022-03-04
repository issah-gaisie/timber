import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input";

const AddressInfo = () => {
  return (
    <form className="w-full  md:w-[30rem] flex flex-col space-y-5">
      <h2 className=" text-lg font-medium text-gray-700">Address Info</h2>
      <label className="block">
        <span className="block text-md  text-gray-700 mb-3">
          Location
        </span>
        <Input placeholder="Location" type="text" />
      </label>
      <label className="block">
        <span className="block text-md  text-gray-700 mb-3">
          Address 1
        </span>
        <Input placeholder="Address 1" type="text" />
      </label>
      <label className="block">
        <span className="block text-md  text-gray-700 mb-3">
          Address 2
        </span>
        <Input placeholder="Last Name" type="text" />
      </label>
      <div className="flex justify-center items-center space-x-4">
        <Link to={-1} className="w-full">
          <button className="w-full bg-indigo-100 hover:bg-indigo-200 hover:ring hover:ring-indigo-600 text-indigo-600  font-semibold py-2 my-3 rounded rounded-md">
            Back
          </button>
        </Link>
        <Link to={"/signup/image"} className="w-full">
          <button
            //   type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 my-3 rounded rounded-md"
          >
            Continue
          </button>
        </Link>
      </div>
    </form>
  );
};

export default AddressInfo;
