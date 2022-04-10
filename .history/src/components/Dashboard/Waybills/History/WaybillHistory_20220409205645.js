import React from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Search from "../../StockManagement/sub-components/Search";
import TableActions from "../../StockManagement/sub-components/TableActions";

const WaybillHistory = () => {
  const navigate = useNavigate();

  const orderColumns = [
    {
      name: "Number",
      selector: (row) => row.orderNumber,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Number of Products",
      selector: (row) => row.numberOfProducts,
    },
    {
      name: "Total Amount",
      selector: (row) => ` GHS ${row.totalAmount}`,
    },
    // {
    //   name: "Active",
    //   selector: (row) =>
    //     row.isActive ? (
    //       <ActivePill>Active</ActivePill>
    //     ) : (
    //       <InactivePill>Inactive</InactivePill>
    //     ),
    // },
    {
      name: "Actions",
      selector: (row) => (
        <div>
          <TableActions
            viewAction={() => navigate(`/dashboard/orders/${row.id}`)}
            noDelete
          />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      {/* <AddnExport /> */}
      <Search placeholder="Search Waybills" />
      <DataTable
        className="w-full rounded rounded-lg"
        columns={orderColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default WaybillHistory;

const data = [
  {
    id: 1,
    orderNumber: "order-234tvd",
    description: "Order Description",
    status: "completed",
    numberOfProducts: 13,
    totalAmount: 130,
    isPaid: true,
    driver: "",
    client: "",
    manager: "",
    supervisor: "",
    personnel: "",
    amountPaid: "",
  },
  {
    id: 2,
    orderNumber: "order-234tvd45",
    description: "Order Description",
    status: "completed",
    numberOfProducts: 13,
    totalAmount: 130,
    isPaid: true,
    driver: "",
    client: "",
    manager: "",
    supervisor: "",
    personnel: "",
    amountPaid: "",
  },
  {
    id: 3,
    orderNumber: "order-234t5jvd",
    description: "Order Description",
    status: "completed",
    numberOfProducts: 13,
    totalAmount: 130,
    isPaid: false,
    driver: "",
    client: "",
    manager: "",
    supervisor: "",
    personnel: "",
    amountPaid: "",
  },
];
