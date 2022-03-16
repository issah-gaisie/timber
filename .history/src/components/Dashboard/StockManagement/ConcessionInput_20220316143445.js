import React, { useState } from "react";
import Input from "../../Input";
import toast from "react-hot-toast";
import { FormGrid } from "../Users/AddANewUser";
const ConcessionInput = () => {
  const [state, setState] = useState({
    concessionName: "",
    concessionSize: "",
    description: "",
    totalNumberOfTrees: "",
    address: "",
    permitNumber: "",
    permitExpiryDate: "",
    permitDocument: "",
  });
  return <div>
      
  </div>;
};

export default ConcessionInput;
