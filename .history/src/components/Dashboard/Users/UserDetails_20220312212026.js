import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { RiEditLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import manCTimber from "../../../assets/man_cutting_timber.jpg";
import Input from "../../Input";
const UserDetails = () => {
  const [state, setState] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    address1: "",
    address2: "",
    active: false,
  });
  const params = useParams();
  useEffect(() => {
    handleGetUser();
  }, []);

  const handleGetUser = () => {
    setTimeout(() => {
      setState({
        ...state,
        username: "ErnestGaisie",
        firstName: "Ernest",
        lastName: "Gaisie",
        email: "ernestgaisie@gmail.com",
        phoneNumber: "+23355234566",
        location: "Nungua",
        address1: "Nungua Barrier",
        address2: "Nungua Second",
        active: true,
      });
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col bg-white p-6 rounded rounded-lg relative">
      {/* Button Group */}
      

      <div className="h-24 w-24 relative mb-4">
        <img
          src={manCTimber}
          alt="man cutting timber"
          className="object-cover h-full w-full rounded rounded-full"
        />
      </div>
      <div className="md:absolute md:top-6 md:right-6 justify-center space-x-2 flex items-center">
        <button className="text-sm text-slate-600 bg-slate-200 px-2 py-0.5 rounded rounded-full mr-2 hover:font-medium hover:ring-2 hover:ring-slate-600/50 flex items-center"><RiEditLine className="mr-1"/> Edit</button>
        {state.active ? (
          <button className="text-sm text-red-600 bg-red-200 px-2 py-0.5 rounded rounded-full hover:font-medium hover:ring-2 hover:ring-red-600/50">- Deactivate</button>
        ) : (
          <button className="text-sm text-green-600 bg-green-200 px-2 py-0.5 rounded rounded-full hover:font-medium hover:ring-2 hover:ring-green-600/50">+ Activate</button>
        )}
      </div>
      <h2 className=" text-xl font-medium text-gray-700 my-2">
        Personal Details
      </h2>
      <UserDetailsGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Username</span>
          <Input
            disabled
            placeholder="Username"
            type="text"
            value={state.username}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">First Name</span>
          <Input
            disabled
            placeholder="First Name"
            type="text"
            value={state.firstName}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Last Name</span>
          <Input
            disabled
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
            disabled
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
            disabled
            placeholder="eg: 0505707987"
            type="tel"
            value={state.phoneNumber}
          />
        </label>
      </UserDetailsGrid>
      <hr className="my-3" />
      <h2 className=" text-xl font-medium text-gray-700 my-4">Address Info</h2>
      <UserDetailsGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Location</span>
          <Input
            disabled
            placeholder="Location"
            type="text"
            value={state.location}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Address 1</span>
          <Input
            disabled
            placeholder="Address 1"
            type="text"
            value={state.address1}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Address 2</span>
          <Input
            disabled
            placeholder="Address 2"
            type="text"
            value={state.address2}
          />
        </label>
      </UserDetailsGrid>
    </div>
  );
};

export default UserDetails;

const UserDetailsGrid = ({ children }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {children}
    </div>
  );
};
