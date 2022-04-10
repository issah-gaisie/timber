import React, { useState } from "react";
import Input from "../../../Input";
import TextArea from "../../../TextArea";

import Select from "../../../Select";
// import OrderItems from "./sub-components/OrderItems";

import GoBack from "../../sub-components/GoBack";
import { FormGrid } from "../../Users/AddANewUser";
// import GetOrder from "./sub-components/GetOrder";

const AddReturn = () => {
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

  return (
    <div className="w-full flex flex-col">
      <GoBack />
      <h2 className=" text-xl font-medium text-gray-700 my-2">
        New Waybill Return
      </h2>
      {/* <GetOrder /> */}
      <br />

      <form className="w-full flex flex-col">
        <FormGrid>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">
              Order Number
            </span>
            <Input
              placeholder="Order Number"
              type="text"
              value={state.orderNumber}
            />
          </label>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">Client</span>
            <Input placeholder="Client" type="text" value={state.client} />
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
            <span className="block text-md  text-gray-700 mb-3">Comment</span>
            <TextArea
              placeholder="Enter comment"
              type="text"
              value={state.comment}
            />
          </label>
        </FormGrid>
        <br />
        {/* <OrderItems /> */}
        <button
          type="submit"
          className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
        >
          Create Return
        </button>
      </form>
    </div>
  );
};

export default AddReturn;
