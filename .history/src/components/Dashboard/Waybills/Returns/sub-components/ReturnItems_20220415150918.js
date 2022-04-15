import React from "react";
import DataTable from "react-data-table-component";
import TableActions from "../../../StockManagement/sub-components/TableActions";
const ReturnItems = (props) => {
  const [state, setState] = useState([...data]);
  const [visible, setVisible] = useState(false);

  const toggleModal = (row) => {
    console.log(row);
    setVisible((previousState) => !previousState);
  };

  const handleItemEdit = () => {};

  const returnItemColumns = [
    {
      name: "Product Name",
      selector: (row) => row.productName,
    },
    {
      name: "Reason",
      selector: (row) => row.reason,
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
            deleteAction={() =>
              window.confirm("Are you sure you want to delete this item?")
            }
            viewAction={() => toggleModal(row.id)}
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
        columns={returnItemColumns}
      />
    </div>
  );
};

export default ReturnItems;

const EditForm = (props) => {
  const [state, setState] = useState({
    id: 1,
    productName: "A Product",
    species: "Product Species",
    quantity: 12,
    price: 12,
    amount: 144,
    tickness: "Tickness",
    width: 23,
    length: 12,
    reason: "",
  });
  return (
    <form className="w-full flex flex-col">
      <div
        className="gap-6 mb-5 px-5 2xl:px-0"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        }}
      >
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Product Name
          </span>
          <Input
            placeholder="Product Name"
            type="text"
            value={state.productName}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Reason</span>
          <Input
            placeholder="Reason"
            type="number"
            step="0.0"
            value={state.reason}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Species</span>
          <Input placeholder="Species" type="text" value={state.species} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Quantity</span>
          <Input placeholder="Quantity" type="number" value={state.quantity} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Amount</span>
          <Input
            placeholder="Amount"
            type="number"
            step="0.0"
            value={state.amount}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Thickness</span>
          <Input placeholder="Thickness" type="text" value={state.tickness} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Width</span>
          <Input
            placeholder="Width"
            step="0.0"
            type="number"
            value={state.width}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Length</span>
          <Input
            placeholder="Length"
            type="number"
            step="0.0"
            value={state.length}
          />
        </label>
      </div>
      <button className="w-full md:w-60 md:self-end rounded rounded-md py-3 text-white bg-tclPrimary">
        Edit Item
      </button>
    </form>
  );
};

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
    reason: "Reason for returning",
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
    reason: "Reason for returning",
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
    reason: "Reason for returning",
  },
];
