import React,{useState} from "react";
import Input from "../../Input";
import toast from "react-hot-toast";
import { FormGrid } from "../Users/AddANewUser";
const Compartment = () => {
  const [state, setState] = useState({
    compartmentName: "",
    concession: "",
    description: "",
    numberOfTrees: "",
    compartmentSize: "",
  });
  
  return <div>Compartment</div>;
};

export default Compartment;
