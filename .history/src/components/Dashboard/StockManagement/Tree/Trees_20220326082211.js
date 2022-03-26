import React from "react";
import AddnExport from "../sub-components/Add-Export";
import DataTable from "react-data-table-component";
import { ActivePill, InactivePill } from "../sub-components/StatusPill";
import { useNavigate } from "react-router-dom";
import Search from "../sub-components/Search";

const Trees = () => {
  const navigate=useNavigate()
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
    description: "A beautiful Tree",
    price: 123.0,
    isAvailable: true,
  },
  {
    id: 2,
    treeName: "Timber Tree",
    description: "A beautiful Tree",
    price: 123.0,
    isAvailable: true,
  },
  {
    id: 3,
    treeName: "Timber Tree",
    description: "A beautiful Tree",
    price: 123.0,
    isAvailable: false,
  },
  {
    id: 4,
    treeName: "Timber Tree",
    description: "A beautiful Tree",
    price: 123.0,
    isAvailable: true,
  },
  {
    id: 5,
    treeName: "Timber Tree",
    description: "A beautiful Tree",
    price: 123.0,
    isAvailable: false,
  },
  {
    id: 6,
    treeName: "Timber Tree",
    description: "A beautiful Tree",
    price: 123.0,
    isAvailable: true,
  },
  {
    id: 7,
    treeName: "Timber Tree",
    description: "A beautiful Tree",
    price: 123.0,
    isAvailable: false,
  },
];
