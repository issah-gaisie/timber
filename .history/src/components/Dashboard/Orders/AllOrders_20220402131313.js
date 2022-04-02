import React from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Search from "../StockManagement/sub-components/Search";
import TableActions from "../StockManagement/sub-components/TableActions";
import { useState } from "react";
import FilterByClient from "./sub-components/FilterByClient";
import { useEffect } from "react";
const AllOrders = () => {
  const navigate = useNavigate();
  const [shouldFilter, setShouldFilter] = useState(false);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
      console.log({shouldFilter},{filter})
  }, [shouldFilter,filter]);

  const toggleShouldFilter = () => setShouldFilter((prevState) => !prevState);
  const compartmentColumns = [
    {
      name: "Number",
      selector: (row) => row.orderNumber,
    },
    {
      name: "Description",
      selector: (row) => row.description,
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
            deleteAction={() =>
              window.confirm(`Are you sure you want to delete this compartment`)
            }
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
        columns={compartmentColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default AllOrders;

const data = [
  {
    id: 1,
    orderNumber: "order-234tvd",
    description: "Order Description",
    
    isActive: true,
  },
  {
    id: 2,
    orderNumber: "order-234tvd45",
    description: "Order Description",
    
    isActive: true,
  },
  {
    id: 3,
    orderNumber: "order-234t5jvd",
    description: "Order Description",
    
    isActive: false,
  },
];
