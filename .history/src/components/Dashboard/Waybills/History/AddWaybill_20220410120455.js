import React, { useState } from "react";
import Input from "../../../Input";
import GoBack from "../../sub-components/GoBack";
import { FormGrid } from "../../Users/AddANewUser";

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
      <div className="flex space-x-2 items-end">
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Enter Order Number
          </span>
          <Input
            placeholder="Enter Order Number"
            type="text"
            value={state.compartmentName}
          />
        </label>
        <button
          type="submit"
          className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 rounded rounded-md self-end"
        >
          Get Order
        </button>
      </div>
    </div>
  );
};

export default AddWaybill;
