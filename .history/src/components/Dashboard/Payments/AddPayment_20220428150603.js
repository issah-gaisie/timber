import React, { useState } from "react";
import Select from "../../Select";
import Input from "../../Input";

import TextArea from "../../TextArea";
import { FormGrid } from "../Users/AddANewUser";
import toast from "react-hot-toast";

const AddPayment = () => {
  const [state, setState] = useState({
    paymentName: "",
    description: "",
    isFullyPaid: "",
    amountPaid: 0,
    amountOutstanding: 0,
    totalAmount: 0,
    lastPaymentDate: new Date().toISOString(),
    userId: 0,
    dateCreated: new Date().toISOString(),
    paymentModeId: 0,
    paymentStatusId: 0,
    dueDate: new Date().toISOString(),
    dueDateInDays: "",
    comment: "",
    waybillId: 0,
    paymentTypeId: 0,
    accountId: 0,
  });

  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createPaymentPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Payment Created Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(createPaymentPromise, {
      loading: "Creating Payment",
      success: "Payment Created Successfully",
      error: "Payment Create Failed",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full flex flex-col`}>
      <h2 className=" text-xl font-medium text-gray-700 my-2">New Payment</h2>

      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Payment Name
          </span>
          <Input
            placeholder="Payment Name"
            type="text"
            value={state.paymentName}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Description</span>
          <TextArea
            placeholder="Description"
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
            type="text"
            value={state.totalAmount}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Amount Paid</span>
          <Input
            placeholder="Amount Paid"
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
            type="datetime-local"
            value={state.lastPaymentDate.slice(0, 16)}
          />
        </label>

        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">User</span>
          <Select
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
            options={[]}
            value={state.teamId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Due Date</span>
          <Input
            placeholder="Due Date"
            type="datetime-local"
            value={state.dueDate.slice(0, 16)}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Waybill</span>
          <Select
            label="Select a Waybill"
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
            options={[]}
            value={state.paymentTypeId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Account</span>
          <Select
            label="Select a Account"
            options={[]}
            value={state.accountId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Comment</span>
          <TextArea placeholder="Comment" type="text" value={state.comment} />
        </label>
      </FormGrid>
      <button
        type="submit"
        className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
      >
        Create Payment
      </button>
    </form>
  );
};

export default AddPayment;
