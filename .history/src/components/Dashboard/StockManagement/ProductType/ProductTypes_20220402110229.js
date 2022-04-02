import React from "react";
import AddnExport from "../sub-components/Add-Export";
import DataTable from "react-data-table-component";
import { ActivePill, InactivePill } from "../sub-components/StatusPill";
import { useNavigate } from "react-router-dom";
import Search from "../sub-components/Search";
import TableActions from "../sub-components/TableActions";

const ProductTypes = () => {
  const navigate=useNavigate()
  const productColumns = [
    {
      name: "Name",
      selector: (row) => row.productName,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Price",
      selector: (row) => `GHS ${row.price}.00`,
    },
    {
      name: "Quantity In Stock",
      selector: (row) => row.quantityInStock,
    },
    {
      name: "Active",
      selector: (row) => row.isActive?<ActivePill >Active</ActivePill>:<InactivePill>Inactive</InactivePill>,
    },
    {
      name:'Actions',
      selector:(row)=><div>
        <TableActions viewAction={()=>navigate(`${row.id}`)} deleteAction={()=>window.confirm(`Are you sure you want to delete this Product Type`)} />
      </div>
    }
  
  ];
  return (
    <div className="w-full">
      <AddnExport />
      <Search/>
      <DataTable
        className="w-full rounded rounded-lg"
        columns={productColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default ProductTypes;


const data = [
  {
    id: 1,
    productName: "A Product Type",
    description: "Product Description",
    isActive: true,
  },
  {
    id: 2,
    productName: "A Product Type",
    description: "Product Description",
   
    isActive: true,
  },
  {
    id: 3,
    productName: "A Product Type",
    description: "Product Description",
    price: 123,
    quantityInStock: 123,
    isActive: false,
  },
];
