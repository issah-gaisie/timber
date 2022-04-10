import React from "react";
import Input from "../../../Input";
import GoBack from "../../sub-components/GoBack";

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
    </div>
  );
};

export default AddWaybill;
