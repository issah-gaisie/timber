import React, { useState } from "react";
import Input from "../../Input";
import toast from "react-hot-toast";
import { FormGrid } from "../Users/AddANewUser";
import Select from "../../Select";
import { testConcessions } from "../../../utils";
import GoBack from "../sub-components/GoBack";
import TextArea from "../../TextArea";

const AddTreeFell = () => {
    const [state, setState] = useState({
        compartmentName: "",
        concession: null,
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
      return (
        <form className="w-full flex flex-col" onSubmit={handleSubmit}>
          <GoBack />
          <h2 className=" text-xl font-medium text-gray-700 my-2">
            New Compartment
          </h2>
          <FormGrid>
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">
                Compartment Name
              </span>
              <Input
                placeholder="Compartment Name"
                type="text"
                value={state.compartmentName}
              />
            </label>
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">
                Compartment Size
              </span>
              <Input
                placeholder="Compartment Size"
                type="text"
                value={state.compartmentSize}
              />
            </label>
            
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">
                Number of Trees
              </span>
              <Input
                placeholder="Total Number of Trees"
                type="email"
                value={state.numberOfTrees}
              />
            </label>
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">
                Select Concession
              </span>
              <Select
                type="text"
                options={testConcessions}
                value={state.concession}
              />
            </label>
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">Description</span>
              <TextArea
                placeholder="Description"
                type="text"
                value={state.description}
              />
            </label>
          </FormGrid>
          <button
            type="submit"
            className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
          >
            Create Compartment
          </button>
        </form>
      );
    };
};

export default AddTreeFell;
