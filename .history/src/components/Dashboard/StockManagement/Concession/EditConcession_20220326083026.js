import React, { useState } from "react";
import Input from "../../../Input";
import toast from "react-hot-toast";
import { FormGrid } from "../../Users/AddANewUser";
import TextArea from "../../../TextArea";
import GoBack from "../../sub-components/GoBack";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";
import DocumentUpload from "../../sub-components/DocumentUploads";

const EditConcession = () => {
  const [disabled, setDisabled] = useState(true);
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
      <div className="self-end">
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
      </div>
      <h2 className=" text-xl font-medium text-gray-700 my-2">
        {disabled ? "Concession Details" : "Edit Concession"}
      </h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Concession Name
          </span>
          <Input
            placeholder="Concession Name"
            type="text"
            disabled={disabled}
            value={state.concessionName}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Concession Size
          </span>
          <Input
            placeholder="Concession Size"
            type="text"
            disabled={disabled}
            value={state.concessionSize}
          />
        </label>

        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Total Number of Trees
          </span>
          <Input
            placeholder="Total Number of Trees"
            type="email"
            disabled={disabled}
            value={state.totalNumberOfTrees}
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
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Address</span>
          <TextArea
            placeholder="eg: 0505707987"
            type="text"
            disabled={disabled}
            value={state.address}
          />
        </label>
      </FormGrid>
      <h2 className=" text-xl font-medium text-gray-700 my-4">Permit Info</h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Permit Number
          </span>
          <Input
            placeholder="Permit Number"
            type="text"
            disabled={disabled}
            value={state.permitNumber}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Permit Expiry Date
          </span>
          <Input
            placeholder="Permit Expiry Date"
            type="text"
            disabled={disabled}
            value={state.permitExpiryDate}
          />
        </label>
      </FormGrid>
      <span className="block text-md  text-gray-700 mb-3 mt-4">
        Permit Document
      </span>
      <DocumentUpload disabled />
      {!disabled && (
      <button
        type="submit"
        className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
      >
        Edit Concession
      </button>
}
    </form>
  );
};

export default EditConcession;
