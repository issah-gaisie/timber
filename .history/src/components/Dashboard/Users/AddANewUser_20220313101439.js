import React, { useState } from "react";
import Input from "../../Input";
import toast from "react-hot-toast";
import { ProfileImageSection,SignatureSection } from "../sub-components/DocumentUploads";
const AddANewUser = () => {
  const [state, setState] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    address1: "",
    address2: "",
  });

  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createUserPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "User Created Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(createUserPromise, {
      loading: "Creating User",
      success: "User Created Successfully",
      error: "User Create Failed",
    });
  };
  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit}>
      <ProfileImageSection />
      <h2 className=" text-xl font-medium text-gray-700 my-2">
        Personal Details
      </h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Username</span>
          <Input placeholder="Username" type="text" value={state.username} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">First Name</span>
          <Input placeholder="First Name" type="text" value={state.firstName} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Last Name</span>
          <Input placeholder="Last Name" type="text" value={state.lastName} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Email Address
          </span>
          <Input placeholder="Email Address" type="email" value={state.email} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Phone Number
          </span>
          <Input
            placeholder="eg: 0505707987"
            type="tel"
            value={state.phoneNumber}
          />
        </label>
      </FormGrid>
      <h2 className=" text-xl font-medium text-gray-700 my-4">Address Info</h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Location</span>
          <Input placeholder="Location" type="text" value={state.location} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Address 1</span>
          <Input placeholder="Address 1" type="text" value={state.address1} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Address 2</span>
          <Input placeholder="Address 2" type="text" value={state.address2} />
        </label>
      </FormGrid>
      <h2 className=" text-xl font-medium text-gray-700 my-4">Signature</h2>
      <SignatureSection />
      <button
        type="submit"
        className="w-full md:w-auto md:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
      >
        Create User
      </button>
    </form>
  );
};

export default AddANewUser;

export const FormGrid = ({ children }) => {
  return (
    <div className="w-full sm:w-5/6 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
      {children}
    </div>
  );
};
