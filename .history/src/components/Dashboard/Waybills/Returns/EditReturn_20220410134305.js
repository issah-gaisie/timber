import React, { useState } from "react";
import Input from "../../../Input";
import TextArea from "../../../TextArea";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";
import Select from "../../../Select";
import GoBack from "../../sub-components/GoBack";
import { FormGrid } from "../../Users/AddANewUser";
import toast from "react-hot-toast";

const EditReturn = () => {
  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useState({
    orderNumber: "",
    driverId: "",
    clientId: "",
    managerId: "",
    supervisorId: "",
    personnelId: "",
    waybillId: "",
    totalAmount: "",
    comment: "",
  });

  const toggleDisable = () => setDisabled((oldState) => !oldState);
  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editWaybillReturnPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Waybill Return edited Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(editWaybillReturnPromise, {
      loading: "Editing Waybill Return",
      success: "Waybill Return edited Successfully",
      error: "Waybill Return edit Failed",
    });
  };

  return (
    <form className="w-full flex flex-col">
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
        {disabled ? "Waybill Return Details" : "Edit Waybill Return"}
      </h2>
      {/* <GetOrder /> */}
      <br />
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Order Number
          </span>
          <Input
            placeholder="Order Number"
            type="text"
            disabled={disabled}
            value={state.orderNumber}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Waybill</span>
          <Select
            options={[]}
            label="Select Waybill"
            disabled={disabled}
            value={state.waybillId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Client</span>
          <Select
            options={[]}
            label="Select a client"
            disabled={disabled}
            value={state.clientId}
          />
        </label>

        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Driver</span>
          <Select
            options={[]}
            label="Select A Driver"
            disabled={disabled}
            value={state.driverId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Manager</span>
          <Select
            options={[]}
            label="Select a Manager"
            disabled={disabled}
            value={state.managerId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Supervisor</span>
          <Select
            options={[]}
            label="Select a Supervisor"
            disabled={disabled}
            value={state.supervisorId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Personnel</span>
          <Select
            placeholder="Select a Personnel"
            options={[]}
            disabled={disabled}
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
          <span className="block text-md  text-gray-700 mb-3">Comment</span>
          <TextArea
            placeholder="Enter comment"
            type="text"
            disabled={disabled}
            value={state.comment}
          />
        </label>
      </FormGrid>
      <br />
      {/* <OrderItems /> */}
      {!disabled && (
        <button
          type="submit"
          className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
        >
          Edit Return
        </button>
      )}
    </form>
  );
};

export default EditReturn;
