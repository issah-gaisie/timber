import React, { useState } from "react";
import DataTable from "react-data-table-component";
import TableActions from "../../../StockManagement/sub-components/TableActions";
import EditItemModal from "./EditItemModal";
const OrderItems = (props) => {
  const [visible, setVisible] = useState(false);
  const toggleModal = (row) => {
    console.log(row);
    setVisible((previousState) => !previousState);
  };
  const orderItemColumns = [
    {
      name: "Product Name",
      selector: (row) => row.productName,
    },
    {
      name: "Species",
      selector: (row) => row.species,
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
      name: "Width",
      selector: (row) => row.width,
    },
    {
      name: "Length",
      selector: (row) => row.length,
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
    {
      name: "Actions",
      selector: (row) => (
        <div>
          <TableActions
            viewAction={toggleModal}
            deleteAction={() =>
              window.confirm("Are you sure you want to delete this item?")
            }
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <DataTable
        title={<span className="font-semibold">Order Items</span>}
        data={data}
        disabled={props.disabled}
        columns={orderItemColumns}
      />
      <EditItemModal visible={visible} hide={toggleModal}></EditItemModal>
    </div>
  );
};

export default OrderItems;

const data = [
  {
    id: 1,
    productName: "A Product",
    species: "Product Species",
    quantity: 12,
    price: 12,
    amount: 144,
    tickness: "Tickness",
    width: 23,
    length: 12,
  },
  {
    id: 2,
    productName: "A Product",
    species: "Product Species",
    quantity: 12,
    price: 12,
    amount: 144,
    tickness: "Tickness",
    width: 23,
    length: 12,
  },
  {
    id: 3,
    productName: "A Product",
    species: "Product Species",
    quantity: 12,
    price: 12,
    amount: 144,
    tickness: "Tickness",
    width: 23,
    length: 12,
  },
];
