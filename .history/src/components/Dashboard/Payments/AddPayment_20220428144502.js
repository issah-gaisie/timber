import React, { useState } from "react";

const AddPayment = () => {
  const [state, setState] = useState({
    paymentName: "",
    description: "",
    isFullyPaid: "",
    amountPaid: 0,
    amountOutstanding: 0,
    totalAmount: 0,
    lastPaymentDate: new Date().toDateString(),
    user: "",
    dateCreated: new Date().toDateString(),
    paymentModeId: 0,
    paymentStatusId: 0,
    dueDate: new Date().toDateString(),
    dueDateInDays: "",
    comment: "",
    waybillId: 0,
    paymentTypeId: 0,
    accountId: 0,
  });
  return <div>AddPayment</div>;
};

export default AddPayment;
