import React from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Search from "../StockManagement/sub-components/Search";
import TableActions from "../StockManagement/sub-components/TableActions";
const UserPayments = () => {
  const navigate = useNavigate();
  const paymentColumns = [
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
    {
      name: "Actions",
      selector: (row) => (
        <div>
          <TableActions
            viewAction={() => navigate(`/dashboard/payments/${row.id}`)}
            deleteAction={() =>
              alert("Are you sure you want to delete this payment")
            }
          />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      {/* <h1 className="text-4xl font-extrabold my-3 mb-6  text-slate-700">
            Notifications
          </h1> */}
      <Search placeholder="Search User Payments" />
      <DataTable
        className="w-full rounded rounded-lg"
        columns={paymentColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default UserPayments;
const data = [
  {
    id: 1,
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
  },
];
