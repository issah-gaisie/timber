import React, { useState } from "react";
import Input from "../../Input";
import toast from "react-hot-toast";
import { FormGrid } from "../Users/AddANewUser";
const ConcessionInput = () => {
  const [state, setState] = useState({
    concessionName: "ErnestGaisie",
    firstName: "Ernest",
    lastName: "Gaisie",
    email: "ernestgaisie@gmail.com",
    phoneNumber: "+23355234566",
  });
  return <div>ConcessionInput</div>;
};

export default ConcessionInput;
