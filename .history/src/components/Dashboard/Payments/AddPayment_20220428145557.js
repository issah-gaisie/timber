import React, { useState } from "react";
import Select from "../../Select";
import Input from "../../Input";

import TextArea from "../../TextArea";

const AddPayment = () => {
  const [state, setState] = useState({
    paymentName: "",
    description: "",
    isFullyPaid: "",
    amountPaid: 0,
    amountOutstanding: 0,
    totalAmount: 0,
    lastPaymentDate: new Date().toISOString(),
    user: "",
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
    <form>
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
            options={[]}
            placeholder="Team"
            value={state.teamId}
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
