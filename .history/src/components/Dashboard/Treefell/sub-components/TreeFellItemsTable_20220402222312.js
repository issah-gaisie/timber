import { nanoid } from "nanoid";
import React from "react";
import DataTable from "react-data-table-component";

const TreeFellItemsTable = () => {
  const treeFellItemsColumns = [
    {
      name: "Tree Fell Code",
      selector: (row) => row.,
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
        columns={treeFellItemsColumns}
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
    status:'fell',
    id: nanoid(),
  },
  {
    description: "description",
    dimension: "dimension",
    quantity: "quantity",
    volume: "volume",
    status:'fell',
    id: nanoid(),
  },
  {
    description: "description",
    dimension: "dimension",
    quantity: "quantity",
    volume: "volume",
    status:'fell',
    id: nanoid(),
  },
];
