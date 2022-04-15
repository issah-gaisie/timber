import React, { useState } from "react";
import toast from "react-hot-toast";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";
import logo from "../../../assets/logo.png";
import Input from "../../Input";
import {
  ProfileImageSection,
  SignatureSection,
} from "../sub-components/DocumentUploads";
import { FormGrid } from "../Users/AddANewUser";

const CompanyInfo = () => {
  const [state, setState] = useState({
    companyName: "",
    location: "",
    email: "",
    phoneNumber: "",
    fax: "",
    logoUrl: "",
    logo: logo,
    registrationNumber: "",
    registrationDate: "",
    certificateOfRegistrationUrl: "",
    certificateOfRegistrationFile: "",
    commencementDate: "",
    certificateOfCommencementUrl: "",
    certificateOfCommencementFile: "",
  });

  const [disabled, setDisabled] = useState(true);
  const toggleDisable = () => setDisabled((oldState) => !oldState);
  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const changeSettingsPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Settings Changed Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(changeSettingsPromise, {
      loading: "Updating Settings",
      success: "Settings Changed Successfully",
      error: "Settings Update Failed",
    });
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center my-6">
        <h4 className="text-left text-xl md:text-2xl text-gray-600 font-semibold">
          Company Info
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
      <ProfileImageSection disabled={disabled} preview={state.logo} />
      <form onSubmit={handleSubmit} className={`w-full flex flex-col`}>
        <FormGrid>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">
              Company Name
            </span>
            <Input
              disabled={disabled}
              placeholder="Company Name"
              type="text"
              value={state.companyName}
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
    </div>
  );
};

export default CompanyInfo;
