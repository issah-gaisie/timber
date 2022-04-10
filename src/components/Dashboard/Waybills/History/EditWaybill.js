import React, { useState } from "react";
import Input from "../../../Input";
import Select from "../../../Select";
import OrderItems from "./sub-components/OrderItems";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";

import GoBack from "../../sub-components/GoBack";
import { FormGrid } from "../../Users/AddANewUser";
import GetOrder from "./sub-components/GetOrder";
import toast from "react-hot-toast";

const EditWaybill = () => {
  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useState({
    orderNumber: "",
    driverId: "",
    clientId: "",
    managerId: "",
    supervisorId: "",
    personnelId: "",
    isPaid: "",
    totalAmount: "",
    amountPaid: "",
    comment: "",
    currencyId: "",
  });
  const toggleDisable = () => setDisabled((oldState) => !oldState);
  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editWaybillPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Waybill edited Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(editWaybillPromise, {
      loading: "Editing Waybill",
      success: "Waybill edited Successfully",
      error: "Waybill edit Failed",
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
      </div>
      <h2 className=" text-xl font-medium text-gray-700 my-2">
        {disabled ? "Waybill Details" : "Edit Waybill"}
      </h2>

      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Description</span>
          <Input
            placeholder="Description"
            disabled={disabled}
            type="text"
            value={state.description}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Delivery Address
          </span>
          <Input
            placeholder="Delivery Address"
            disabled={disabled}
            type="text"
            value={state.deliveryAddress}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Email</span>
          <Input
            placeholder="Email"
            type="text"
            disabled={disabled}
            value={state.email}
          />
        </label>

        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Phone Number
          </span>
          <Input
            placeholder="Phone Number"
            disabled={disabled}
            type="text"
            value={state.phoneNumber}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Client</span>
          <Input
            placeholder="Client"
            disabled={disabled}
            type="text"
            value={state.client}
          />
        </label>

        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Dispatch Type
          </span>
          <Input
            placeholder="Dispatch Type"
            disabled={disabled}
            type="text"
            value={state.dispatchType}
          />
        </label>

        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Driver</span>
          <Select
            options={[]}
            label="Select A Driver"
            placeholder="Driver"
            disabled={disabled}
            type="text"
            value={state.driverId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Manager</span>
          <Select
            options={[]}
            disabled={disabled}
            label="Select a Manager"
            placeholder="Manager"
            type="text"
            value={state.managerId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Supervisor</span>
          <Select
            options={[]}
            label="Select a Supervisor"
            disabled={disabled}
            placeholder="Supervisor"
            type="text"
            value={state.supervisorId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Personnel</span>
          <Select
            placeholder="Select a Personnel"
            options={[]}
            disabled={disabled}
            type="text"
            value={state.personnelId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Total Amount
          </span>
          <Input
            placeholder="Total Amount"
            type="text"
            disabled={disabled}
            value={state.totalAmount}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Amount Paid</span>
          <Input
            placeholder="Amount Paid"
            disabled={disabled}
            type="text"
            value={state.amountPaid}
          />
        </label>
      </FormGrid>
      <br />
      <OrderItems disabled={disabled} />
      {!disabled && (
        <button
          type="submit"
          className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
        >
          Edit Waybill
        </button>
      )}
    </form>
  );
};

export default EditWaybill;
