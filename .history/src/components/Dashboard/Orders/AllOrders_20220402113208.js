import React from "react";
import DataTable from "react-data-table-component";
import Search from "../StockManagement/sub-components/Search";

const AllOrders = () => {
  const navigate=useNa()

  const compartmentColumns = [
    {
      name: "Name",
      selector: (row) => row.compartmentName,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Size",
      selector: (row) => row.size,
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

const data = [
  {
    id: 1,
    compartmentName: "A Compartment",
    description: "Compartment Description",
    size: 123.0,
    isActive: true,
  },
  {
    id: 2,
    compartmentName: "A Compartment",
    description: "Compartment Description",
    size: 123.0,
    isActive: true,
  },
  {
    id: 3,
    compartmentName: "A Compartment",
    description: "Compartment Description",
    size: 123.0,
    isActive: false,
  },
  {
    id: 4,
    compartmentName: "A Compartment",
    description: "Compartment Description",
    size: 123.0,
    isActive: true,
  },
  {
    id: 5,
    compartmentName: "A Compartment",
    description: "Compartment Description",
    size: 123.0,
    isActive: false,
  },
  {
    id: 6,
    compartmentName: "A Compartment",
    description: "Compartment Description",
    size: 123.0,
    isActive: true,
  },
  {
    id: 7,
    compartmentName: "A Compartment",
    description: "Compartment Description",
    size: 123.0,
    isActive: false,
  },
];
