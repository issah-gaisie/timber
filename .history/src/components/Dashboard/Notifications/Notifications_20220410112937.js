import React from "react";
import DataTable from "react-data-table-component";

const Notifications = () => {
  const notificationColumns = [
    {
      name: "Notification",
      selector: (row) => row.title,
    },
  ];
  return (
    <div className="w-full h-full flex flex-col items-start">
      <h1 className="text-4xl font-extrabold my-3 mb-6  text-slate-700">
        Notifications
      </h1>
      <DataTable
        className="w-full rounded rounded-lg"
        columns={notificationColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default Notifications;

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
