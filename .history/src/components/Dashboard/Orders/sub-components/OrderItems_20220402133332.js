import React from "react";
import DataTable from "react-data-table-component";
import TableActions from "../../StockManagement/sub-components/TableActions";

const OrderItems = () => {
  const orderItemColumns = [
    {
      name: "Product Name",
      selector: (row) => row.productName,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
    },
    {
      name: "Price",
      selector: (row) => ` GHS ${row.price}`,
    },
    {
      name: "Thickness",
      selector: (row) => row.tickness,
    },
    {
      name: "Amount",
      selector: (row) => ` GHS ${row.amount}`,
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
  ];

  return (
    <div className="w-full">
      <DataTable title={<span>Order Items</span>} data={data} columns={orderItemColumns} />
    </div>
  );
};

export default OrderItems;

const data = [
  {
    id: 1,
    productName: "A Product",
    quantity: 12,
    price: 12,
    amount: 144,
    tickness: "Tickness",
    width: 23,
    height: 12,
  },
  {
    id: 2,
    productName: "A Product",
    quantity: 12,
    price: 12,
    amount: 144,
    tickness: "Tickness",
    width: 23,
    height: 12,
  },
  {
    id: 3,
    productName: "A Product",
    quantity: 12,
    price: 12,
    amount: 144,
    tickness: "Tickness",
    width: 23,
    height: 12,
  },
];
