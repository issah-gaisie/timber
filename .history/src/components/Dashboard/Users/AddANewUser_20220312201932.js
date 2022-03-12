import React, { useState } from "react";
import Input from "../../Input";
const AddANewUser = () => {
  const [state, setState] = useState({});
  return (
    <form className="w-full ">
      <h2 className=" text-lg font-medium text-gray-700 my-2">
        Personal Details
      </h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Username</span>
          <Input placeholder="Username" type="email" />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">First Name</span>
          <Input placeholder="First Name" type="text" />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Last Name</span>
          <Input placeholder="Last Name" type="text" />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Email Address
          </span>
          <Input placeholder="Email Address" type="email" />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Phone Number
          </span>
          <Input placeholder="eg: 0505707987" type="tel" />
        </label>
      </FormGrid>
      <h2 className=" text-lg font-medium text-gray-700 my-2">Address Info</h2>
      <hr/>

      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Location</span>
          <Input placeholder="Location" type="text" />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Address 1</span>
          <Input placeholder="Address 1" type="text" />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Address 2</span>
          <Input placeholder="Address 2" type="text" />
        </label>
      </FormGrid>
    </form>
  );
};

export default AddANewUser;

const FormGrid = ({ children }) => {
  return (
    <div className="w-full sm:w-5/6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {children}
    </div>
  );
};
