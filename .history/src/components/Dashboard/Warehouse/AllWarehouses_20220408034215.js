import React from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Search from "../StockManagement/sub-components/Search";
import {
  ActivePill,
  InactivePill,
} from "../StockManagement/sub-components/StatusPill";
import TableActions from "../StockManagement/sub-components/TableActions";
const AllWarehouses = () => {
  const navigate = useNavigate();
  const warehouseColumns = [
    {
      name: "Warehouse Name",
      selector: (row) => row.warehouseName,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Location",
      selector: (row) => row.location,
    },
    {
      name: "Active",
      selector: (row) =>
        row.isActive ? (
          <ActivePill>Active</ActivePill>
        ) : (
          <InactivePill>Inactive</InactivePill>
        ),
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
    },
    {
      name: "Actions",
      selector: (row) => (
        <div>
          <TableActions
            viewAction={() => navigate(`/dashboard/warehouse/${row.id}`)}
            noDelete
          />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Search placeholder="Search Warehouses" />
      <DataTable
        className="w-full rounded rounded-lg"
        columns={warehouseColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default AllWarehouses;

const data = [
  {
    id: 1,
    warehouseName: "warehouse-234tvd",
    description: "Warehouse Description",
    isActive: true,
    location: "location",
    email: "tcl@gmail.com",
    phoneNumber: "024456789",
  },
  {
    id: 2,
    warehouseName: "warehouse-234tvd45",
    description: "Warehouse Description",
    isActive: true,
    location: "location",
    email: "tcl@gmail.com",
    phoneNumber: "024456789",
  },
  {
    id: 3,
    warehouseName: "warehouse-234t5jvd",
    description: "Warehouse Description",
    isActive: true,
    location: "location",
    email: "tcl@gmail.com",
    phoneNumber: "024456789",
  },
];
