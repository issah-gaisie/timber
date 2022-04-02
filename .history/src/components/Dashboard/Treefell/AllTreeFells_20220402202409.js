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
        selector: (row) =>` GHS ${ row.totalAmount}`,
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
      <FilterByClient
        filter={filter}
        changeHandler={setFilter}
        shouldFilter={shouldFilter}
        toggleFilters={toggleShouldFilter}
      />
      <Search placeholder="Search Orders" />
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
