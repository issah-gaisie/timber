import React from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Search from "../StockManagement/sub-components/Search";
import TableActions from "../StockManagement/sub-components/TableActions";
import Select from "react-select";
import { useState } from "react";
const AllOrders = () => {
  const navigate = useNavigate();
  const [shouldFilter, setShouldFilter] = useState(false);
  const [filter, setFilter] = useState("");

  const toggleShouldFilter = () => setShouldFilter((prevState) => !prevState);
  const compartmentColumns = [
    {
      name: "Name",
      selector: (row) => row.orderName,
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
            viewAction={() => navigate(`${row.id}`)}
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

const FilterByClient = ({ filter, changeHandler, toggleFilters }) => {
  return (
    <div className="flex flex items-stretch space-x-3 justify-end">
      {
        <Select
          placeholder="Select A Client"
          onChange={(item) => changeHandler(item.value)}
          options={testClients}
          className="w-full md:w-[20rem]"
          name="client"
        />
      }
      {
        
        <button
          className="rounded rounded-md bg-gray-800 text-white py-1 px-2"
          onClick={toggleFilters}
        >
          Filter by Client
        </button>
      }
    </div>
  );
};

const testClients = [
  { label: "Ernest", value: "Ernest" },
  { label: "Earnest", value: "Earnest" },
  { label: "Ear-nest", value: "Ear-nest" },
];

const data = [
  {
    id: 1,
    orderName: "An Order",
    description: "Order Description",
    isActive: true,
  },
  {
    id: 2,
    orderName: "An Order",
    description: "Order Description",
    isActive: true,
  },
  {
    id: 3,
    orderName: "An Order",
    description: "Order Description",
    isActive: false,
  },
  {
    id: 4,
    orderName: "An Order",
    description: "Order Description",
    isActive: true,
  },
  {
    id: 5,
    orderName: "An Order",
    description: "Order Description",
    isActive: false,
  },
  {
    id: 6,
    orderName: "An Order",
    description: "Order Description",
    isActive: true,
  },
  {
    id: 7,
    orderName: "An Order",
    description: "Order Description",
    isActive: false,
  },
];
