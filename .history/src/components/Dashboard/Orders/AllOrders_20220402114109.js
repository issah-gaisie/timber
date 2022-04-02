import React from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Search from "../StockManagement/sub-components/Search";
import TableActions from "../StockManagement/sub-components/TableActions";
import Select from ''
const AllOrders = () => {
  const navigate=useNavigate()

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
      <FilterByClient/>
      <Search />
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

const FilterByClient=()=>{
    return(
        <div className="flex flex items-end justify-end">
            
            <button className="rounded rounded-md bg-tclPrimary/25 text-tclPrimary py-1 px-2">
                Filter by Client
            </button>

        </div>
    );
}

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
