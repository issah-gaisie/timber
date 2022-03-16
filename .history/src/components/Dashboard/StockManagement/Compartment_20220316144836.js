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

  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createUserPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "User Created Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(createUserPromise, {
      loading: "Creating User",
      success: "User Created Successfully",
      error: "User Create Failed",
    });
  };
  return <div>Compartment</div>;
};

export default Compartment;
