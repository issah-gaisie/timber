import React from "react";
import DataTable from "react-data-table-component";
import Search from "../StockManagement/sub-components/Search";
const AllPayments = () => {
  const notificationColumns = [
    {
      name: "Payment",
      selector: (row) => row.title,
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
    title: "A new order has been placed",
  },
  {
    id: 1,
    title: "A new waybill has been created for order-1234",
  },
  {
    id: 1,
    title: "A new order has been placed",
  },
  {
    id: 1,
    title: "A new order has been placed",
  },
  {
    id: 1,
    title: "A new order has been placed",
  },
];
