import React, { useState } from "react";
import logo from "../../../assets/logo.png";

const CompanyInfo = () => {
  const [state, setstate] = useState({
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
  return <div>CompanyInfo</div>;
};

export default CompanyInfo;
