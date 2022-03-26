import React from "react";
import AddnExport from "../sub-components/Add-Export";
import DataTable from "react-data-table-component";
import { ActivePill, InactivePill } from "../sub-components/StatusPill";
import Search from "../sub-components/Search";

const Species = () => {
  return (
    <div className="w-full">
      <AddnExport />
      <Search/>
      <DataTable
        className="w-full rounded rounded-lg"
        columns={speciesColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default Species;

const speciesColumns = [
  {
    name: "Name",
    selector: (row) => row.speciesName,
  },
  {
    name: "Description",
    selector: (row) => row.description,
  },
  {
    name: "Number Of Trees",
    selector: (row) => row.numberOfTrees,
  },
  {
    name: "Active",
    selector: (row) => row.isActive?<ActivePill >Active</ActivePill>:<InactivePill>Inactive</InactivePill>,
  },

];

const data = [
  {
    id: 1,
    speciesName: "A Species",
    description: "Species Description",
    numberOfTrees: 123,
    isActive: true,
  },
  {
    id: 2,
    speciesName: "A Species",
    description: "Species Description",
    numberOfTrees: 123,
    isActive: true,
  },
  {
    id: 3,
    speciesName: "A Species",
    description: "Species Description",
    numberOfTrees: 123,
    isActive: false,
  },
  {
    id: 4,
    speciesName: "A Species",
    description: "Species Description",
    numberOfTrees: 123,
    isActive: true,
  },
  {
    id: 5,
    speciesName: "A Species",
    description: "Species Description",
    numberOfTrees: 123,
    isActive: false,
  },
  {
    id: 6,
    speciesName: "A Species",
    description: "Species Description",
    numberOfTrees: 123,
    isActive: true,
  },
  {
    id: 7,
    speciesName: "A Species",
    description: "Species Description",
    numberOfTrees: 123.0,
    isActive: false,
  },
];
