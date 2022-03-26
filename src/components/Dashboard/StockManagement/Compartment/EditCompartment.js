import React, { useState } from "react";
import Input from "../../../Input";
import toast from "react-hot-toast";
import { FormGrid } from "../../Users/AddANewUser";
import Select from "../../../Select";
import { testConcessions } from "../../../../utils";
import GoBack from "../../sub-components/GoBack";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";
import TextArea from "../../../TextArea";

const EditCompartment = () => {
  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useState({
    compartmentName: "",
    concession: null,
    description: "",
    numberOfTrees: "",
    compartmentSize: "",
  });
  const toggleDisable = () => setDisabled((oldState) => !oldState);

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
      <div className='self-end'>
          {disabled ? (
            <div className="">
              <button
                onClick={toggleDisable}
                type='button'
                className="md:hidden rounded rounded-full p-2 shadow-lg bg-gray-700 hover:bg-gray-800 "
              >
                <RiEditBoxLine className="text-lg text-white" />
              </button>
              <button
                type='button'
                onClick={toggleDisable}
                className="hidden md:block bg-gray-700 hover:bg-gray-800 py-2 px-4 text-white text-medium font-semibold shadow-lg rounded rounded-md"
              >
                Edit
              </button>
            </div>
          ) : (
            <div>
              <button
                type='button'
                onClick={toggleDisable}
                className="md:hidden rounded rounded-full p-1.5 shadow-lg bg-red-700 hover:bg-red-800 "
              >
                <RiCloseLine className="text-lg text-white" />
              </button>
              <button
                type='button'
                onClick={toggleDisable}
                className="hidden md:block bg-red-700 hover:bg-red-800 py-2 px-4 text-white text-medium font-semibold shadow-lg rounded rounded-md"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      <h2 className=" text-xl font-medium text-gray-700 my-2">
        {disabled ? "Compartment Details" : "Edit Compartment"}
      </h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Compartment Name
          </span>
          <Input
            placeholder="Compartment Name"
            type="text"
            disabled={disabled}
            value={state.compartmentName}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Compartment Size
          </span>
          <Input
            placeholder="Compartment Size"
            disabled={disabled}
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
            disabled={disabled}
            value={state.numberOfTrees}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Select Concession
          </span>
          <Select
            type="text"
            disabled={disabled}
            options={testConcessions}
            value={state.concession}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Description</span>
          <TextArea
            placeholder="Description"
            type="text"
            disabled={disabled}
            value={state.description}
          />
        </label>
      </FormGrid>
      {!disabled && (
        <button
          type="submit"
          className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
        >
          Edit Compartment
        </button>
      )}
    </form>
  );
};

export default EditCompartment;
