import React from "react";
import { useState } from "react";
import GoBack from "../sub-components/GoBack";
import OrderItems from "./sub-components/OrderItems";
import TotalSection from "./sub-components/TotalSection";
import { RiFileDownloadLine } from "react-icons/ri";
import Input from "../../Input";
import OrderStatusSteps from "./sub-components/OrderStatusSteps";
const OrderDetails = () => {
  const [disabled, setDisabled] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [state, setState] = useState({
    id: 1,
    orderNumber: "order-234tvd",
    description: "Order Description",
    status: "completed",
    client: "Kwesi",
    dispatchType: "type",
    currency: "GHS",
    numberOfProducts: 13,
    deliveryAddress: "Delivery Address",
    totalAmount: 130,
    destinationCountryId: 2,
    comment: "",
    dispatchTypeId: 3,
    email: "tcl@gmail.com",
    phoneNumber: "0200033400",
    currencyId: 3,
    vatAmount: 4,
    contractNumber: "23456",
    contractDocumentUrl: "https://contractdocurl.com",
    contractDocumentFile: "",
  });
  return (
    <div className="w-full flex flex-col">
      <GoBack />
      <button
        type="button"
        className="self-end bg-gray-700 hover:bg-gray-800 py-2 px-4 text-white text-medium font-semibold shadow-lg rounded rounded-md flex items-center"
      >
        <span className="">Download Contract</span>
      </button>
      <h1 className="text-3xl uppercase font-extrabold my-3 text-gray-600">
        #{state.orderNumber}
      </h1>
      <OrderStatusSteps activeStep={activeStep} />
      <div
        className="gap-4 my-10 px-5 2xl:px-0"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        }}
      >
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Description</span>
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
      </div>
      <OrderItems />
      <TotalSection />
    </div>
  );
};

export default OrderDetails;
