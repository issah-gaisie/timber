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
  return <div>TreeFellItemsTable</div>;
};

export default TreeFellItemsTable;

const data = [
  {
    description: "description",
    dimension: "dimension",
    quantity: "quantity",
    volume: "",
    id: nanoid(),
  },
  {
    description: "description",
    dimension: "dimension",
    quantity: "quantity",
    volume: "",
    id: nanoid(),
  },
  {
    description: "description",
    dimension: "dimension",
    quantity: "quantity",
    volume: "",
    id: nanoid(),
  },
];
