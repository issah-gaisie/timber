import React from "react";
import GoBack from "../../sub-components/GoBack";
import { FormGrid } from "../../Users/AddANewUser";
import Input from "../../../Input";
import toast from "react-hot-toast";
import { useState } from "react";
import TextArea from "../../../TextArea";

const AddSpecie = () => {
  const [state, setState] = useState({
    speciesName: "",
    isActive: null,
    description: "",
    numberOfTrees: "",
    marketValue: "",
    numberOfTreesFelled: "",
    numberOfTreesRemaining: "",
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
      <h2 className=" text-xl font-medium text-gray-700 my-2">New Species</h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Species Name
          </span>
          <Input
            placeholder="Species Name"
            type="text"
            value={state.speciesName}
          />
        </label>

        
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Number of Trees
          </span>
          <Input
            placeholder="Total Number of Trees"
            type="text"
            value={state.numberOfTrees}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Market Value
          </span>
          <Input
            placeholder="Market Value"
            type="text"
            value={state.marketValue}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Number of Trees Felled
          </span>
          <Input
            placeholder="Number of Trees Felled"
            type="text"
            value={state.numberOfTreesFelled}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Number of Trees Remaining
          </span>
          <Input
            placeholder="Number of Trees Remaining"
            type="text"
            value={state.numberOfTreesRemaining}
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
      <div className='mt-3'>
        <input
          placeholder="Number of Trees Remaining"
          type="checkbox"
          id="isActive"
          value={state.isActive}
        />
        <span className="text-md  text-gray-700 ml-3">Active</span>
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
      >
        Create Species
      </button>
    </form>
  );
};

export default AddSpecie;
