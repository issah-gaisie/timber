import React, { useState } from "react";
import Input from "../../../Input";
import Select from "../../../Select";

import GoBack from "../../sub-components/GoBack";
import { FormGrid } from "../../Users/AddANewUser";
import GetOrder from "./sub-components/GetOrder";

const AddWaybill = () => {
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

  return (
    <div className="w-full flex flex-col">
      <GoBack />
      <h2 className=" text-xl font-medium text-gray-700 my-2">New Waybill</h2>
      <GetOrder />
      <form className="w-full flex flex-col">
        <FormGrid>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">
              Description
            </span>
            <Input
              placeholder="Description"
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
              type="text"
              value={state.deliveryAddress}
            />
          </label>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">Email</span>
            <Input placeholder="Email" type="text" value={state.email} />
          </label>

          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">
              Phone Number
            </span>
            <Input
              placeholder="Phone Number"
              type="text"
              value={state.phoneNumber}
            />
          </label>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">Client</span>
            <Input placeholder="Client" type="text" value={state.client} />
          </label>

          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">
              Dispatch Type
            </span>
            <Input
              placeholder="Dispatch Type"
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
              type="text"
              value={state.driverId}
            />
          </label>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">Manager</span>
            <Select
              options={[]}
              label="Select a Manager"
              placeholder="Manager"
              type="text"
              value={state.managerId}
            />
          </label>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">
              Supervisor
            </span>
            <Select
              options={[]}
              label="Select a Supervisor"
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
              value={state.totalAmount}
            />
          </label>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">
              Amount Paid
            </span>
            <Input
              placeholder="Amount Paid"
              type="text"
              value={state.amountPaid}
            />
          </label>
        </FormGrid>
        <button
          type="submit"
          className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
        >
          Create Waybill
        </button>
      </form>
    </div>
  );
};

export default AddWaybill;
