import React, { useState } from "react";
import Input from "../../Input";
import toast from "react-hot-toast";
import { FormGrid } from "../Users/AddANewUser";
const ConcessionInput = () => {
  const [state, setState] = useState({
    concessionName: "ErnestGaisie",
    concessionSize: "Ernest",
    description: "Gaisie",
    totalNumberOfTrees: "ernestgaisie@gmail.com",
    address: "+23355234566",
  });
  return <div>ConcessionInput</div>;
};

export default ConcessionInput;
