import { nanoid } from "nanoid";
import React from "react";
import DataTable from "react-data-table-component";

const TreeFellItemsTable = () => {
  const treeFellItems = [
    {
      name: "Tree Fell Code",
      selector: (row) => row.treeFellCode,
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
      name: "Total Quantity",
      selector: (row) => row.totalQuantity,
    },
  ];
  return (
    <div className="w-full">
      <DataTable
        className="w-full rounded rounded-lg"
        columns={treeFellItems}
        data={data}
        pagination
      />
    </div>
  );
};

export default TreeFellItemsTable;

const data = [
  {
    description: "description",
    dimension: "dimension",
    quantity: "quantity",
    volume: "volume",
    id: nanoid(),
  },
  {
    description: "description",
    dimension: "dimension",
    quantity: "quantity",
    volume: "volume",
    id: nanoid(),
  },
  {
    description: "description",
    dimension: "dimension",
    quantity: "quantity",
    volume: "volume",
    id: nanoid(),
  },
];
