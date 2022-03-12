import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import manCTimb
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
      });
    }, 1500);
  };

  return (<div className="w-full flex flex-col md:flex-row bg-white">
      <div className="h-20 w-20">
        <img src="" alt="" className="object-cover h-full w-full" />
      </div>
  </div>);
};

export default UserDetails;
