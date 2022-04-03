import React, { useState } from "react";
import Input from "../../Input";
import toast from "react-hot-toast";
import { FormGrid } from "../Users/AddANewUser";
import Select from "../../Select";
import { testConcessions } from "../../../utils";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";
import { FaBoxes, FaTruckLoading, FaTruckMoving } from "react-icons/fa";

import { GrDeliver } from "react-icons/gr";
import GoBack from "../sub-components/GoBack";
import TextArea from "../../TextArea";
import TreeFellItems from "./sub-components/TreeFellItems";
import TreeFellItemsTable from "./sub-components/TreeFellItemsTable";
import { Stepper, Step } from "react-form-stepper";
import { GiCheckMark, GiHalfLog } from "react-icons/gi";

const TreeFellDetails = () => {
  const [disabled, setDisabled] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [state, setState] = useState({
    managerId: 0,
    supervisorId: 0,
    description: "",
    totalQuantity: "",
    teamId: 0,
    clerkId: 0,
    treeFellItems: [],
  });

  const toggleDisable = () => setDisabled((oldState) => !oldState);

  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editTreeFellPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "TreeFell Edited Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(editTreeFellPromise, {
      loading: "Editing TreeFell",
      success: "TreeFell Edited Successfully",
      error: "TreeFell Edit Failed",
    });
  };
  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit}>
      <GoBack />
      <Stepper
        className="w-full"
        stepClassName="bg-tclPrimary"
        connectorStyleConfig={{
          // activeColor: "#3e7c17",
          // completedColor: "#94a3b8",
          // disabledColor: "#D3F3BE",
          size: 2,
        }}
        styleConfig={{
          inactiveBgColor: "#D3F3BE",
          // inactiveTextColor:'',
          activeBgColor: "#3e7c17",
          activeTextColor: "white",
          completedBgColor: "#94a3b8",
          // completedTextColor:''
        }}
        activeStep={activeStep}
      >
        <Step label="Fresh">
          <GiHalfLog />
        </Step>
        <Step label="Moved to Sliding Area">
          <FaTruckLoading />
        </Step>
        <Step label="Transported">
          <FaTruckMoving />
        </Step>
        <Step label="Delivered">
          <GiCheckMark />
        </Step>
      </Stepper>
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
        <button className="text-tclPrimary bg-lime-100 px-2 py-1 rounded rounded-lg">
          Update Status
        </button>
      </div>
      <h2 className=" text-xl font-medium text-gray-700 my-2">
        {disabled ? "TreeFell Details" : "Edit TreeFell"}
      </h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Manager</span>
          <Select
            placeholder="Manager"
            label="Select a Manager"
            options={[]}
            disabled={disabled}
            type="text"
            value={state.managerId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Supervisor</span>
          <Select
            label="Select a Supervisor"
            type="text"
            disabled={disabled}
            options={[]}
            value={state.supervisorId}
          />
        </label>

        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Team</span>
          <Select
            label="Select a Team"
            options={[]}
            disabled={disabled}
            placeholder="Team"
            value={state.teamId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Clerk</span>
          <Select
            label="Select a Clerk"
            options={[]}
            disabled={disabled}
            value={state.clerkId}
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
      <h2 className="my-4 text-lg font-semibold">Items</h2>
      {!disabled ? <TreeFellItems /> : <TreeFellItemsTable />}
      {!disabled && (
        <button
          type="submit"
          className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
        >
          Edit TreeFell
        </button>
      )}
    </form>
  );
};

export default TreeFellDetails;
