import React, { useState } from "react";
import toast from "react-hot-toast";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";
import logo from "../../../assets/logo.png";
import Input from "../../Input";
import DocumentUpload, {
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
    registrationDate: new Date().toISOString(),
    certificateOfRegistrationUrl: "",
    certificateOfRegistrationFile: "",
    commencementDate: new Date().toISOString(),
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
            <span className="block text-md  text-gray-700 mb-3">Email</span>
            <Input
              disabled={disabled}
              placeholder="Email"
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
              placeholder="Phone Number"
              type="tel"
              value={state.phoneNumber}
            />
          </label>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">Location</span>
            <Input
              disabled={disabled}
              placeholder="Location"
              type="location"
              value={state.location}
            />
          </label>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">Fax</span>
            <Input
              disabled={disabled}
              placeholder="Fax"
              type="text"
              value={state.fax}
            />
          </label>
        </FormGrid>

        <br />
        <hr />
        <br />

        <h2 className="block  text-gray-700 mb-3 font-bold text-lg">
          Registration
        </h2>
        <FormGrid>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">
              Registration Number
            </span>
            <Input
              disabled={disabled}
              placeholder="Registration Number"
              type="text"
              value={state.registrationNumber}
            />
          </label>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">
              Registration Date
            </span>
            <Input
              disabled={disabled}
              placeholder="Registration Date"
              type="datetime-local"
              value={state.registrationDate.slice(0, 16)}
            />
          </label>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">
              Commencement Date
            </span>
            <Input
              disabled={disabled}
              placeholder="Commencement Date"
              type="datetime-local"
              value={state.commencementDate.slice(0, 16)}
            />
          </label>
          <label className="block">
            <h2 className="block text-md  text-gray-700 mb-3 mt-1">
              Certificate of Registration
            </h2>
            <DocumentUpload disabled={disabled} />
          </label>
        </FormGrid>

        {/* <SignatureSection disabled={disabled} /> */}
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
