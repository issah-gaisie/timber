import React from "react";
import { useState } from "react";
import GoBack from "../sub-components/GoBack";

const OrderDetails = () => {
  const [state, setState] = useState({
    id: 1,
    orderNumber: "order-234tvd",
    description: "Order Description",
    status: "completed",
    numberOfProducts: 13,
    totalAmount: 130,
    isActive: true,
  });
  return (
    <div className="w-full">
      <GoBack />
      {/* OrderDetails */}
      <O
    </div>
  );
};

export default OrderDetails;



