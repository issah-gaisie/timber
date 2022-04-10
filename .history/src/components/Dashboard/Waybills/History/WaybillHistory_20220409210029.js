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
      name: "Driver",
      selector: (row) => row.driver,
    },
    {
      name: "Client",
      selector: (row) => row.client,
    },
    {
      name: "Manager",
      selector: (row) => row.manager,
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
    numberOfProducts: 13,
    totalAmount: 130,
    isPaid: true,
    driver: "Mensah",
    client: "Yaw",
    manager: "Gaisie",
    supervisor: "Ernest",
    personnel: "Senior Maen",
    amountPaid: 120,
  },
  {
    id: 2,
    orderNumber: "order-234tvd45",
    numberOfProducts: 13,
    totalAmount: 130,
    isPaid: true,
    driver: "Mensah",
    client: "Yaw",
    manager: "Gaisie",
    supervisor: "Ernest",
    personnel: "Senior Maen",
    amountPaid: 120,
  },
  {
    id: 3,
    orderNumber: "order-234t5jvd",
    numberOfProducts: 13,
    totalAmount: 130,
    isPaid: false,
    driver: "Mensah",
    client: "Yaw",
    manager: "Gaisie",
    supervisor: "Ernest",
    personnel: "Senior Maen",
    amountPaid: 120,
  },
];
