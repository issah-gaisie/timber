import React from "react";
import DataTable from "react-data-table-component";
import TableActions from "../../StockManagement/sub-components/TableActions";

const OrderItems = () => {
  const compartmentColumns = [
    {
      name: "Number",
      selector: (row) => row.orderNumber,
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
      name: "Number of Products",
      selector: (row) => row.numberOfProducts,
    },
    {
      name: "Total Amount",
      selector: (row) => ` GHS ${row.totalAmount}`,
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
      <DataTable />
    </div>
  );
};

export default OrderItems;

const data = [
    {
        id:1,
        productName:'A Product',
        quantity:12,
        price:12,
        amount:144,
        tickness:'Tickness',
        width:23,
        height:12
    },
    {
        id:2,
        productName:'A Product',
        quantity:12,
        price:12,
        amount:144,
        tickness:'Tickness',
        width:23,
        height:12
    },   
     {
        id:3,
        productName:'A Product',
        quantity:12,
        price:12,
        amount:144,
        tickness:'Tickness',
        width:23,
        height:12
    },

];

