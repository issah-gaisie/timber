import React from "react";
import DataTable from "react-data-table-component";
import Search from "../StockManagement/sub-components/Search";
const AllPayments = () => {
  const notificationColumns = [
    {
      name: "Payment Name",
      selector: (row) => row.paymentName,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Amount Paid",
      selector: (row) => row.amountPaid,
    },
    {
      name: "Total Amount",
      selector: (row) => row.totalAmount,
    },
    {
      name: "Last Payment Date",
      selector: (row) => row.lastPaymentDate,
    },
    {
      name: "Due Date",
      selector: (row) => row.dueDate,
    },
  ];
  return (
    <div className="w-full h-full flex flex-col items-start">
      {/* <h1 className="text-4xl font-extrabold my-3 mb-6  text-slate-700">
            Notifications
          </h1> */}
      <Search placeholder="Search Payments" />
      <DataTable
        className="w-full rounded rounded-lg"
        columns={notificationColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default AllPayments;
const data = [
  {
    id: 1,
    paymentName: "Payment Name",
    description: "",
    isFullyPaid: "No",
    amountPaid: 2000,
    amountOutstanding: 4000,
    totalAmount: 6000,
    lastPaymentDate: new Date().toISOString(),
    user: "Ernest",
    dateCreated: new Date().toISOString(),
    paymentModeId: 45,
    paymentStatusId: 2,
    dueDate: new Date().toISOString(),
    dueDateInDays: "4 days",
    comment: "",
    waybillId: 2,
    paymentTypeId: 2,
    accountId: 4,
  },
];
