import React, { useState } from "react";
import Input from "../../Input";
import toast from "react-hot-toast";
import { FormGrid } from "../Users/AddANewUser";
import TextArea from "../../TextArea";
import DocumentUpload from "../sub-components/DocumentUploads";
const ConcessionInput = () => {
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
      <h2 className=" text-xl font-medium text-gray-700 my-2">
        Concession Details
      </h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Concession Name
          </span>
          <Input
            placeholder="Concession Name"
            type="text"
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
            value={state.concessionSize}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Description</span>
          <Input
            placeholder="Description"
            type="text"
            value={state.description}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Total Number of Trees
          </span>
          <Input
            placeholder="Total Number of Trees"
            type="email"
            value={state.totalNumberOfTrees}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Address</span>
          <TextArea
            placeholder="eg: 0505707987"
            type="text"
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
            value={state.permitExpiryDate}
          />
        </label>
      </FormGrid>
      <span className="block text-md  text-gray-700 mb-3 mt-4">
        Permit Document
      </span>
      <DocumentUpload/>
      <button
        type="submit"
        className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
      >
        Create Concession
      </button>
    </form>
  );
};

export default ConcessionInput;
