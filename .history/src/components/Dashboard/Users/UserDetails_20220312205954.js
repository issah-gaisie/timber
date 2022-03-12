import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import manCTimber from "../../../assets/man_cutting_timber.jpg";
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
    active:false
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
        active:true
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
          {state.active?'Active':'disabled'}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

      </div>
    </div>
  );
};

export default UserDetails;

const UserDetailsGrid=()