import { nanoid } from "nanoid";
import React from "react";
import DataTable from "react-data-table-component";

const TreeFellItemsTable = () => {
  const treeFellColumns = [
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
  return <div className="w-full">
  <Search placeholder="Search TreeFells" />
  <DataTable
    className="w-full rounded rounded-lg"
    columns={treeFellColumns}
    data={data}
    pagination
  />
</div>
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
