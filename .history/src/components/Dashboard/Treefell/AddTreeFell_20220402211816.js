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
    managerId: 0,
    supervisorId: 0,
    description: "",
    totalQuantity: "",
    teamId: 0,
    clerkId: 0,
    treeFellItems:[]
  });

  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createTreeFellPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "TreeFell Created Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(createTreeFellPromise, {
      loading: "Creating TreeFell",
      success: "TreeFell Created Successfully",
      error: "TreeFell Create Failed",
    });
  };
  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit}>
      <GoBack />
      <h2 className=" text-xl font-medium text-gray-700 my-2">
        New TreeFell
      </h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Manager</span>
          <Select placeholder="Manager" 
            label="Select a Manager"
            options={[]}  type="text" value={state.managerId} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Supervisor</span>
          <Select
            label="Select a Supervisor"
            type="text"
            options={[]} 
            value={state.supervisorId}
          />
        </label>

        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Team</span>
          <Select
            label="Select a Team"
            options={[]}  placeholder="Team" value={state.teamId} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Clerk</span>
          <Select 
            label="Select a Clerk"
            options={[]} value={state.clerkId} />
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
      <h2>Items</h2>
      <button
        type="submit"
        className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
      >
        Create TreeFell
      </button>
    </form>
  );
};

export default AddTreeFell;
