import React from "react";
import GoBack from "../../sub-components/GoBack";
import { FormGrid } from "../../Users/AddANewUser";
import Input from "../../../Input";
import Select from "../../../Select";

import toast from "react-hot-toast";
import { useState } from "react";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";
import TextArea from "../../../TextArea";

const EditProductType = () => {
  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useState({
    speciesName: "",
    isActive: false,
    description: "",
    numberOfTrees: "",
    marketValue: "",
    numberOfTreesFelled: "",
    numberOfTreesRemaining: "",
  });
  const toggleDisable = () => setDisabled((oldState) => !oldState);

  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editProductPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Product Edited Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    await toast.promise(editProductPromise, {
      loading: "Editing Product",
      success: "Product Edited Successfully",
      error: "Product Edit Failed",
    });
    setDisabled(true);
  };
  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit}>
      <GoBack />
      <div className="flex space-x-2 self-end">
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
        {state.isActive ? (
          <button
            type="button"
            className="text-sm text-red-600 bg-red-200 px-2 py-0.5 rounded rounded-lg hover:font-medium hover:ring-2 hover:ring-red-600/50"
          >
            - Deactivate
          </button>
        ) : (
          <button
            type="button"
            className="text-sm text-green-600 bg-green-200 px-2 py-0.5 rounded rounded-lg hover:font-medium hover:ring-2 hover:ring-green-600/50"
          >
            + Activate
          </button>
        )}
      </div>
      <h2 className=" text-xl font-medium text-gray-700 my-2">
        {disabled ? "Product Type Details" : "Edit Product Type"}
      </h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Product Type
          </span>
          <Input
            placeholder="Product Type"
            type="text"
            disabled={disabled}
            value={state.productType}
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
          Edit Product 
        </button>
      )}
    </form>
  );
};

export default EditProductType;
