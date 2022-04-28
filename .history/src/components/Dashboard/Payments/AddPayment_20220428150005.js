import React, { useState } from "react";
import Select from "../../Select";
import Input from "../../Input";

import TextArea from "../../TextArea";
import { FormGrid } from "../Users/AddANewUser";

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
  return (
    <form
      // onSubmit={handleSubmit}
      className={`w-full flex flex-col`}
    >
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
    </form>
  );
};

export default AddPayment;
