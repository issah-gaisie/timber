import React from "react";
import { useState } from "react";
import GoBack from "../../sub-components/GoBack";
import { FormGrid } from "../../Users/AddANewUser";
import Input from "../../../Input";
import Select from "../../../Select";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";
import toast from "react-hot-toast";
import TextArea from "../../../TextArea";
import TreeDropzone from "./sub-components/TreeDropzone";
import manCuttingTimber from "../../../../assets/man_cutting_timber.jpg";

const EditTree = () => {
  const [disabled, setDisabled] = useState(true);
  const [state, setstate] = useState({
    treeName: "",
    volume: "",
    marketValue: 0.0,
    concessionId: 0,
    compartmentId: 0,
    price: 0.0,
    description: "",
    isAvailable: true,
  });
  const toggleDisable = () => setDisabled((oldState) => !oldState);
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
      <div className="flex space-x-2  self-end">
        {disabled ? (
          <div className="">
            <button
              onClick={toggleDisable}
              type="button"
              className="md:hidden rounded rounded-full p-2 shadow-lg bg-gray-700 hover:bg-gray-800 "
            >
              <RiEditBoxLine className="text-lg text-white" />
            </button>
            <button
              type="button"
              onClick={toggleDisable}
              className="hidden md:block bg-gray-700 hover:bg-gray-800 py-2 px-4 text-white text-medium font-semibold shadow-lg rounded rounded-md"
            >
              Edit
            </button>
          </div>
        ) : (
          <div>
            <button
              type="button"
              onClick={toggleDisable}
              className="md:hidden rounded rounded-full p-1.5 shadow-lg bg-red-700 hover:bg-red-800 "
            >
              <RiCloseLine className="text-lg text-white" />
            </button>
            <button
              type="button"
              onClick={toggleDisable}
              className="hidden md:block bg-red-700 hover:bg-red-800 py-2 px-4 text-white text-medium font-semibold shadow-lg rounded rounded-md"
            >
              Cancel
            </button>
          </div>
        )}
        {state.isAvailable ? (
          <button
            type="button"
            className="text-sm text-red-600 bg-red-200 px-2 py-0.5 rounded rounded-lg hover:font-medium hover:ring-2 hover:ring-red-600/50"
          >
            - Unavail
          </button>
        ) : (
          <button
            type="button"
            className="text-sm text-green-600 bg-green-200 px-2 py-0.5 rounded rounded-lg hover:font-medium hover:ring-2 hover:ring-green-600/50"
          >
            + Avail
          </button>
        )}
      </div>
      <h2 className=" text-xl font-medium text-gray-700 my-2">
        {disabled ? "Tree Details" : "Edit Tree"}
      </h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Tree Name</span>
          <Input
            placeholder="Tree Name"
            disabled={disabled}
            type="text"
            value={state.treeName}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Tree Volume</span>
          <Input
            placeholder="Tree Volume"
            type="text"
            disabled={disabled}
            value={state.volume}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Market Value
          </span>
          <Input
            placeholder="Market Value"
            type="text"
            disabled={disabled}
            value={state.marketValue}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Concession</span>
          <Select
            placeholder="Concession"
            type="text"
            disabled={disabled}
            value={state.concessionId}
            options={[]}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Compartment</span>
          <Select
            placeholder="Compartment"
            type="text"
            disabled={disabled}
            label="Select A Compartment"
            value={state.compartmentId}
            options={[]}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Price</span>
          <Input
            placeholder="Price"
            type="text"
            disabled={disabled}
            value={state.price}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Description</span>
          <TextArea
            placeholder="Description"
            disabled={disabled}
            type="text"
            value={state.description}
          />
        </label>
      </FormGrid>

      <h3 className=" text-lg font-medium text-gray-700 my-2">Tree Images</h3>
      <div className="flex flex-wrap w-full">
        {}
        <img src="" alt="" className="object-fit w-32 shrink-0" />
      </div>
      {!disabled && <TreeDropzone />}
      {!disabled && (
        <button
          type="submit"
          className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
        >
          Edit Tree
        </button>
      )}
    </form>
  );
};

export default EditTree;

const dummyImages = [manCuttingTimber, manCuttingTimber, manCuttingTimber];
