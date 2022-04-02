import React from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Search from "../StockManagement/sub-components/Search";
import TableActions from "../StockManagement/sub-components/TableActions";
import { useState } from "react";
import { useEffect } from "react";
const AllTreeFells = () => {
  const navigate = useNavigate();
  const orderColumns = [
    {
      name: "Tree Fell Code",
      selector: (row) => row.treeFellCode,
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
        name: "Total Quantity",
        selector: (row) => row.totalQuantity,
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
      <Search placeholder="Search TreeFells" />
      <DataTable
        className="w-full rounded rounded-lg"
        columns={orderColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default AllTreeFells;

const data = [
    {
      id: 1,
      treeFellCode: "order-234tvd",
      description: "Order Description",
      status:'completed',
      totalQuantity:130,
      
    },
    {
      id: 2,
      treeFellCode: "order-234tvd45",
      description: "Order Description",
      status:'completed',
      totalQuantity:130,
      
    },
    {
      id: 3,
      treeFellCode: "order-234t5jvd",
      description: "Order Description",
      status:'completed',
      totalQuantity:130,
      isActive: false,
    },
  ];