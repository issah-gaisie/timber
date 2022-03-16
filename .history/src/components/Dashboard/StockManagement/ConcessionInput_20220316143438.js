import React, { useState } from "react";
import Input from "../../Input";
import toast from "react-hot-toast";
import { FormGrid } from "../Users/AddANewUser";
const ConcessionInput = () => {
  const [state, setState] = useState({
    concessionName: "",
    concessionSize: "",
    description: "",
    totalNumberOfTrees: "",
    address: "",
    permitNumber: "",
    permitExpiryDate: "",
    permitDocument: "",
  });
  return <div>
      <form
        onSubmit={handleSubmit}
        className={`w-full flex flex-col`}
      >
        <FormGrid>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">Username</span>
            <Input
              disabled={disabled}
              placeholder="Username"
              type="text"
              value={state.username}
            />
          </label>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">
              First Name
            </span>
            <Input
              disabled={disabled}
              placeholder="First Name"
              type="text"
              value={state.firstName}
            />
          </label>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">Last Name</span>
            <Input
              disabled={disabled}
              placeholder="Last Name"
              type="text"
              value={state.lastName}
            />
          </label>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">
              Email Address
            </span>
            <Input
              disabled={disabled}
              placeholder="Email Address"
              type="email"
              value={state.email}
            />
          </label>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">
              Phone Number
            </span>
            <Input
              disabled={disabled}
              placeholder="eg: 0505707987"
              type="tel"
              value={state.phoneNumber}
            />
          </label>
        </FormGrid>
        <h2 className="block text-md  text-gray-700 mb-3">Signature</h2>
        <SignatureSection disabled={disabled} />
        {!disabled && (
          <button
            type="submit"
            className="w-full md:w-auto md:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
          >
            Update Profile
          </button>
        )}
      </form>
  </div>;
};

export default ConcessionInput;
