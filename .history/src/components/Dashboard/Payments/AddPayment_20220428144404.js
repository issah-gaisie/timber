import React, { useState } from "react";

const AddPayment = () => {
  const [state, setState] = useState({
    paymentName: "Payment Name",
    description: "",
    isFullyPaid: "No",
    amountPaid: 2000,
    amountOutstanding: 4000,
    totalAmount: 6000,
    lastPaymentDate: new Date().toDateString(),
    user: "Ernest",
    dateCreated: new Date().toDateString(),
    paymentModeId: 45,
    paymentStatusId: 2,
    dueDate: new Date().toDateString(),
    dueDateInDays: "4 days",
    comment: "",
    waybillId: 2,
    paymentTypeId: 2,
    accountId: 4,
  });
  return <div>AddPayment</div>;
};

export default AddPayment;
