import React from "react";
import { useState } from "react";
import GoBack from "../sub-components/GoBack";
import OrderItems from "./sub-components/OrderItems";
import TotalSection from "./sub-components/TotalSection";
import { GrDocumentDownload } from "react-icons/gr";
const OrderDetails = () => {
  const [state, setState] = useState({
    id: 1,
    orderNumber: "order-234tvd",
    description: "Order Description",
    status: "completed",
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
        onClick={toggleDisable}
        className="hidden md:block bg-gray-700 hover:bg-gray-800 py-2 px-4 text-white text-medium font-semibold shadow-lg rounded rounded-md"
      >
        <GrDocumentDownload />
        <span className="">Edit</span>
      </button>
      <h1 className="text-3xl uppercase font-extrabold my-3 text-gray-600">
        #{state.orderNumber}
      </h1>
      <OrderItems />
      <TotalSection />
    </div>
  );
};

export default OrderDetails;
