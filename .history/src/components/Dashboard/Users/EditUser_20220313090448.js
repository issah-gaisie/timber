import React, { useState, useEffect } from "react";
import Input from "../../Input";
import toast from "react-hot-toast";
import {
  ProfileImageSection,
  SignatureSection,
} from "../Profile/PersonalDetails";
import { FormGrid } from "./AddANewUser";
import { testUsers } from "../../../utils";
import { useParams } from "react-router-dom";
const EditUser = () => {
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

  const params = useParams();

  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleGetUser = () => {
    const user = testUsers.filter((user) => user.id === Number(params.id));
    setState({
      ...state,
      ...user[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editUserPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "User Edited Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(editUserPromise, {
      loading: "Editing User",
      success: "User Edited Successfully",
      error: "User Edit Failed",
    });
    editUserPromise.then(results=>console.log(results))
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
          <Input placeholder="Username" id='username' type="text" value={state.username}  />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">First Name</span>
          <Input placeholder="First Name" id='firstName' type="text" value={state.firstName} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Last Name</span>
          <Input placeholder="Last Name" type="text" id='lastName' value={state.lastName} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Email Address
          </span>
          <Input placeholder="Email Address" type="email" id='email' value={state.email} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Phone Number
          </span>
          <Input
            placeholder="eg: 0505707987"
            type="tel"
            id='phoneNumber'
            value={state.phoneNumber}
          />
        </label>
      </FormGrid>
      <h2 className=" text-xl font-medium text-gray-700 my-4">Address Info</h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Location</span>
          <Input placeholder="Location" type="text" id='location' value={state.location} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Address 1</span>
          <Input placeholder="Address 1" type="text" id='address1' value={state.address1} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Address 2</span>
          <Input placeholder="Address 2" type="text" id value={state.address2} />
        </label>
      </FormGrid>
      <h2 className=" text-xl font-medium text-gray-700 my-4">Signature</h2>
      <SignatureSection />
      <button
        type="submit"
        className="w-full md:w-auto md:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
      >
        Edit User
      </button>
    </form>
  );
};

export default EditUser;
