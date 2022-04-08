import React, { useState } from "react";
import Input from "../../Input";
import toast from "react-hot-toast";
import { FormGrid } from "../Users/AddANewUser";
import Select from "../../Select";
import GoBack from "../sub-components/GoBack";
import TextArea from "../../TextArea";

const AddWarehouse = () => {
  const [state, setState] = useState({
    warehouseName: "",
    location: "",
    managerId: 0,
    supervisorId: 0,
    description: "",
    totalQuantity: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createWarehousePromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Warehouse Created Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(createWarehousePromise, {
      loading: "Creating Warehouse",
      success: "Warehouse Created Successfully",
      error: "Warehouse Create Failed",
    });
  };
  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit}>
      <GoBack />
      <h2 className=" text-xl font-medium text-gray-700 my-2">New Warehouse</h2>
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
      <button
        type="submit"
        className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
      >
        Create Warehouse
      </button>
    </form>
  );
};

export default AddWarehouse;
