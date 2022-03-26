import React from "react";
import AddnExport from "../sub-components/Add-Export";
import DataTable from "react-data-table-component";
import { ActivePill, InactivePill } from "../sub-components/StatusPill";
import Search from "../sub-components/Search";
import { Navigate, useNavigate } from "react-router-dom";
import TableActions from "../sub-components/TableActions";

const Compartments = () => {
  const navigate=useNavigate()
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
    {
      name: "Active",
      selector: (row) => row.isActive?<ActivePill >Active</ActivePill>:<InactivePill>Inactive</InactivePill>,
  
    },
    {
      name:'Actions',
      selector:(row)=><div>
        {/* <button className="hover:underline text-gray-700" onClick={()=>navigate(`${row.id}`)}>View</button> */}
        <TableActions viewAction={()=>navigate(`${row.id}`)} deleteAction={()=>window.confirm()} />
      </div>
    }
  ];
  return (
    <div className="w-full">
      <AddnExport />
      <Search/>
      <DataTable
        className="w-full rounded rounded-lg"
        columns={compartmentColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default Compartments;



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
