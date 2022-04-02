import React from "react";
import { useState } from "react";
import GoBack from "../sub-components/GoBack";
import OrderItems from "./sub-components/OrderItems";

const OrderDetails = () => {
  const [state, setState] = useState({
    id: 1,
    orderNumber: "order-234tvd",
    description: "Order Description",
    status: "completed",
    numberOfProducts: 13,
    deliveryAddress:'Delivery Address',
    totalAmount: 130,
    destinationCountryId:2,
    comment:'',
    dispatchTypeId:3,
    email:''

    isActive: true,
  });
  return (
    <div className="w-full">
      <GoBack />
      <h1 className="text-3xl uppercase font-extrabold my-3 text-gray-600">#{state.orderNumber}</h1>
      <OrderItems/>
    </div>
  );
};

export default OrderDetails;



