import React from "react";
import AddnExport from "../sub-components/Add-Export";
import DataTable from "react-data-table-component";
import { ActivePill, InactivePill } from "../sub-components/StatusPill";
import Search from "../sub-components/Search";
const Concessions = () => {
  return (
    <div className="w-full">
      <AddnExport />
      <Search/>
      <DataTable
        className="w-full rounded rounded-lg"
        columns={concessionColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default Concessions;

const concessionColumns = [
  {
    name: "Name",
    selector: (row) => row.concessionName,
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

];


const data = [
    {
      id: 1,
      concessionName: "A Concession",
      description: "Concession Description",
      size: 123.0,
      isActive: true,
    },
    {
      id: 2,
      concessionName: "A Concession",
      description: "Concession Description",
      size: 123.0,
      isActive: true,
    },
    {
      id: 3,
      concessionName: "A Concession",
      description: "Concession Description",
      size: 123.0,
      isActive: false,
    },
    {
      id: 4,
      concessionName: "A Concession",
      description: "Concession Description",
      size: 123.0,
      isActive: true,
    },
    {
      id: 5,
      concessionName: "A Concession",
      description: "Concession Description",
      size: 123.0,
      isActive: false,
    },
    {
      id: 6,
      concessionName: "A Concession",
      description: "Concession Description",
      size: 123.0,
      isActive: true,
    },
    {
      id: 7,
      concessionName: "A Concession",
      description: "Concession Description",
      size: 123.0,
      isActive: false,
    },
  ];
  