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
        name: "Total Quantity",
        selector: (row) => row.totalQuantity,
      },
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
      treeFellCode: "treefell-234tvd",
      description: "treefell Description",
      status:'completed',
      totalQuantity:130, 
    },
    {
      id: 2,
      treeFellCode: "treefell-234tvd45",
      description: "treefell Description",
      status:'completed',
      totalQuantity:130,
      
    },
    {
      id: 3,
      treeFellCode: "treefell-234t5jvd",
      description: "treefell Description",
      status:'completed',
      totalQuantity:130,
    },
  ];