import React, { useState } from "react";
import Select from "../../Select";
import Input from "../../Input";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";
import TextArea from "../../TextArea";
import { FormGrid } from "../Users/AddANewUser";
import toast from "react-hot-toast";

const EditPayment = () => {
  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useState({
    paymentName: "Payment Name",
    description: "",
    isFullyPaid: "No",
    amountPaid: 2000,
    amountOutstanding: 4000,
    totalAmount: 6000,
    lastPaymentDate: new Date().toDateString(),
    user: "Ernest",
    dateCreated: new Date().toDateString(),
    paymentModeId: 45,
    paymentStatusId: 2,
    dueDate: new Date().toDateString(),
    dueDateInDays: "4 days",
    comment: "",
    waybillId: 2,
    paymentTypeId: 2,
    accountId: 4,
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
      <h2 className=" text-xl font-medium text-gray-700 my-3">
        {disabled ? "Warehouse Details" : "Edit Warehouse"}
      </h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Payment Name
          </span>
          <Input
            placeholder="Payment Name"
            disabled={disabled}
            type="text"
            value={state.paymentName}
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
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Total Amount
          </span>
          <Input
            placeholder="Total Amount"
            disabled={disabled}
            type="text"
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
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Last Payment Date
          </span>
          <Input
            placeholder="Last Payment Date"
            disabled={disabled}
            type="datetime-local"
            value={state.lastPaymentDate.slice(0, 16)}
          />
        </label>

        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">User</span>
          <Select
            disabled={disabled}
            label="Select a User"
            type="text"
            options={[]}
            value={state.userId}
          />
        </label>

        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Payment Mode
          </span>
          <Select
            label="Select a Payment Mode"
            disabled={disabled}
            options={[]}
            value={state.teamId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Due Date</span>
          <Input
            placeholder="Due Date"
            disabled={disabled}
            type="datetime-local"
            value={state.dueDate.slice(0, 16)}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Waybill</span>
          <Select
            label="Select a Waybill"
            disabled={disabled}
            options={[]}
            value={state.waybillId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Payment Type
          </span>
          <Select
            label="Select a Payment Type"
            disabled={disabled}
            options={[]}
            value={state.paymentTypeId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Account</span>
          <Select
            label="Select a Account"
            disabled={disabled}
            options={[]}
            value={state.accountId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Comment</span>
          <TextArea
            placeholder="Comment"
            type="text"
            disabled={disabled}
            value={state.comment}
          />
        </label>
      </FormGrid>
      <button
        type="submit"
        className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
      >
        Edit Payment
      </button>
    </form>
  );
};

export default EditPayment;
