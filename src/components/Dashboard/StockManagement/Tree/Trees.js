import React from "react";
import AddnExport from "../sub-components/Add-Export";
import DataTable from "react-data-table-component";
import { ActivePill, InactivePill } from "../sub-components/StatusPill";
import { useNavigate } from "react-router-dom";
import Search from "../sub-components/Search";
import TableActions from "../sub-components/TableActions";

const Trees = () => {
  const navigate=useNavigate()
  const treeColumns = [
    {
      name: "Tree Code",
      selector: (row) => row.treeCode,
    },
    {
      name: "Name",
      selector: (row) => row.treeName,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Price",
      selector: (row) => `GHS ${row.price.toFixed(2)}`,
    },
    {
      name: "Available",
      selector: (row) =>
        row.isAvailable ? (
          <ActivePill>Available</ActivePill>
        ) : (
          <InactivePill>Not Available</InactivePill>
        ),
    },
    {
      name:'Actions',
      selector:(row)=><div>
        <TableActions viewAction={()=>navigate(`${row.id}`)} deleteAction={()=>window.confirm(`Are you sure you want to delete this tree`)} />
      </div>
    }
  ];
  return (
    <div className="w-full">
      <AddnExport />
      <Search />
      <DataTable
        className="w-full rounded rounded-lg"
        columns={treeColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default Trees;


const data = [
  {
    id: 1,
    treeName: "Timber Tree",
    treeCode:'code',
    description: "A beautiful Tree",
    price: 123.0,
    isAvailable: true,
  },
  {
    id: 2,
    treeName: "Timber Tree",
    treeCode:'code',
    description: "A beautiful Tree",
    price: 123.0,
    isAvailable: true,
  },
  {
    id: 3,
    treeName: "Timber Tree",
    treeCode:'code',
    description: "A beautiful Tree",
    price: 123.0,
    isAvailable: false,
  },
  {
    id: 4,
    treeName: "Timber Tree",
    treeCode:'code',
    description: "A beautiful Tree",
    price: 123.0,
    isAvailable: true,
  },
  {
    id: 5,
    treeName: "Timber Tree",
    treeCode:'code',
    description: "A beautiful Tree",
    price: 123.0,
    isAvailable: false,
  },
  {
    id: 6,
    treeName: "Timber Tree",
    treeCode:'code',
    description: "A beautiful Tree",
    price: 123.0,
    isAvailable: true,
  },
  {
    id: 7,
    treeName: "Timber Tree",
    treeCode:'code',
    description: "A beautiful Tree",
    price: 123.0,
    isAvailable: false,
  },
];
