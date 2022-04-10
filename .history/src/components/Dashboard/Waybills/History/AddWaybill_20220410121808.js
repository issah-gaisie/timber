import React, { useState } from "react";
import Input from "../../../Input";
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
      <form>
        <FormGrid>
          <label className="block">
            <span className="block text-md  text-gray-700 mb-3">
              Description
            </span>
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
              disabled={disabled}
              type="text"
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
            <span className="block text-md  text-gray-700 mb-3">
              Contract Number
            </span>
            <Input
              placeholder="Contract Number"
              disabled={disabled}
              type="text"
              value={state.contractNumber}
            />
          </label>
        </FormGrid>
      </form>
    </div>
  );
};

export default AddWaybill;
