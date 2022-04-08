import React, { useState } from "react";
import Input from "../../Input";
import toast from "react-hot-toast";
import { FormGrid } from "../Users/AddANewUser";
import Select from "../../Select";
import { testConcessions } from "../../../utils";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";

import { GrDeliver } from "react-icons/gr";
import GoBack from "../sub-components/GoBack";
import TextArea from "../../TextArea";
import TreeFellItems from "./sub-components/TreeFellItems";
import TreeFellItemsTable from "./sub-components/TreeFellItemsTable";
import TreeFellStatusSteps from "./sub-components/TreeFellStatusSteps";

const EditWarehouse = () => {
  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useState({
    warehouseName: "",
    location: "",
    isActive: true,
    managerId: 0,
    supervisorId: 0,
    description: "",
    totalQuantity: "",
    email: "",
    phoneNumber: "",
  });

  const toggleDisable = () => setDisabled((oldState) => !oldState);

  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editWarehousePromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Warehouse Edited Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(editWarehousePromise, {
      loading: "Editing Warehouse",
      success: "Warehouse Edited Successfully",
      error: "Warehouse Edit Failed",
    });
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
      <h2 className=" text-xl font-medium text-gray-700 my-3">
        {disabled ? "Warehouse Details" : "Edit Warehouse"}
      </h2>
      <TreeFellStatusSteps activeStep={activeStep} />

      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Warehouse Name
          </span>
          <Input
            placeholder="Warehouse Name"
            label="Warehouse Name"
            type="text"
            value={state.warehouseName}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Manager</span>
          <Select
            placeholder="Manager"
            label="Select a Manager"
            options={[]}
            type="text"
            value={state.managerId}
          />
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
          <span className="block text-md  text-gray-700 mb-3">Location</span>
          <Input
            placeholder="Location"
            label="Location"
            type="text"
            value={state.location}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Email</span>
          <Input
            placeholder="Email"
            label="Email"
            type="email"
            value={state.email}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Phone Number
          </span>
          <Input
            placeholder="Phone Number"
            label="Phone Number"
            type="tel"
            value={state.phoneNumber}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Clerk</span>
          <Select label="Select a Clerk" options={[]} value={state.clerkId} />
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
      {!disabled && (
        <button
          type="submit"
          className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
        >
          Edit Warehouse
        </button>
      )}
    </form>
  );
};

export default EditWarehouse;
