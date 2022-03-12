import React, { useEffect, useState } from "react";
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
    <div className="w-full flex flex-col items-center  bg-white p-3 rounded rounded-lg">
      <div className="h-24 w-24 relative">
        <img
          src={manCTimber}
          alt="man cutting timber"
          className="object-cover h-full w-full rounded rounded-full"
        />
        <span className="w-full block text-center absolute bottom-0 uppercase rounded rounded-full bg-[#DEF6D0] text-[#4B971C]/50 font-medium px-2 text-sm">
          {state.active ? "Active" : "disabled"}
        </span>
      </div>
      <h2 className=" text-xl font-medium text-gray-700 my-2">
        Personal Details
      </h2>
      <UserDetailsGrid>
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
      </UserDetailsGrid>
      <h2 className=" text-xl font-medium text-gray-700 my-4">Address Info</h2>
      <UserDetailsGrid>
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
      </UserDetailsGrid>
    </div>
  );
};

export default UserDetails;

const UserDetailsGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {children}
    </div>
  );
};
