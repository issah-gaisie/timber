import React, { useState } from "react";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";
import Input from "../../Input";
import toast from "react-hot-toast";
import { FormGrid } from "../Users/AddANewUser";
import {
  ProfileImageSection,
  SignatureSection,
} from "../sub-components/DocumentUploads";
const PersonalDetails = () => {
  const [state, setState] = useState({
    username: "ErnestGaisie",
    firstName: "Ernest",
    lastName: "Gaisie",
    email: "ernestgaisie@gmail.com",
    phoneNumber: "+23355234566",
  });
  const [disabled, setDisabled] = useState(true);
  const toggleDisable = () => setDisabled((oldState) => !oldState);
  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const changeProfilePromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Profile Changed Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(changeProfilePromise, {
      loading: "Updating Profile",
      success: "Profile Changed Successfully",
      error: "Profile Update Failed",
    });
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center my-6">
        <h4 className="text-left text-xl md:text-2xl text-gray-600 font-semibold">
          Personal Details
        </h4>

        <div>
          {disabled ? (
            <div className="">
              <button
                onClick={toggleDisable}
                className="md:hidden rounded rounded-full p-2 shadow-lg bg-gray-700 hover:bg-gray-800 "
              >
                <RiEditBoxLine className="text-lg text-white" />
              </button>
              <button
                onClick={toggleDisable}
                className="hidden md:block bg-gray-700 hover:bg-gray-800 py-2 px-4 text-white text-medium font-semibold shadow-lg rounded rounded-md"
              >
                Edit
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={toggleDisable}
                className="md:hidden rounded rounded-full p-1.5 shadow-lg bg-red-700 hover:bg-red-800 "
              >
                <RiCloseLine className="text-lg text-white" />
              </button>
              <button
                onClick={toggleDisable}
                className="hidden md:block bg-red-700 hover:bg-red-800 py-2 px-4 text-white text-medium font-semibold shadow-lg rounded rounded-md"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
      <ProfileImageSection disabled={disabled} />
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-[50rem] flex ${
          disabled ? "flex-wrap" : "flex-col"
        }`}
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
        <SignatureSection disabled={disabled} />
        <h2 className="block text-md  text-gray-700 mb-3">Signature</h2>

        {!disabled && (
          <button
            type="submit"
            className="w-full md:w-auto md:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
          >
            Update Profile
          </button>
        )}
      </form>
    </div>
  );
};

export default PersonalDetails;
