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
      selector: (row) => ` GHS ${row.amount}`,
    },
    {
      name: "Number of Products",
      selector: (row) => row.numberOfProducts,
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
    {
      name: "Actions",
      selector: (row) => (
        <div>
          <TableActions
            // viewAction={() => navigate(`/dashboard/orders/${row.id}`)}
            noView
            deleteAction={() =>
              window.confirm(`Are you sure you want to delete this compartment`)
            }
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <DataTable data={data} columns={orderItemColumns} />
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
