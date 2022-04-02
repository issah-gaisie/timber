import React from "react";
import GoBack from "../../sub-components/GoBack";
import { FormGrid } from "../../Users/AddANewUser";
import Input from "../../../Input";
import Select from "../../../Select";

import toast from "react-hot-toast";
import { useState } from "react";
import TextArea from "../../../TextArea";

const AddProductType = () => {
  const [state, setState] = useState({
    productName: "",
    productType: null,
    isActive: false,
    description: "",
    quantityInStock: "",
    price: "",
  });

  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createProductPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Product Created Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(createProductPromise, {
      loading: "Creating Product",
      success: "Product Created Successfully",
      error: "Product Create Failed",
    });
  };
  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit}>
      <GoBack />
      <h2 className=" text-xl font-medium text-gray-700 my-2">New Product Type</h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Product Type Name
          </span>
          <Input
            placeholder="Product Name"
            type="text"
            value={state.productName}
          />
        </label>

        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Quantity In Stock
          </span>
          <Input
            placeholder="Quantity In Stock"
            type="text"
            value={state.quantityInStock}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Price</span>
          <Input placeholder="Market Value" type="text" value={state.price} />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Product Type
          </span>
          <Select
            label="Select A Product"
            options={[]}
            value={state.productType}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Description</span>
          <TextArea
            placeholder="Description"
            type="text"
            value={state.description}
          />
        </label>
      </FormGrid>
      {/* <div className='mt-3'>
        <input
          placeholder="Number of Trees Remaining"
          type="checkbox"
          id="isActive"
          value={state.isActive}
        />
        <span className="text-md  text-gray-700 ml-3">Active</span>
      </div> */}
      <button
        type="submit"
        className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
      >
        Create Product
      </button>
    </form>
  );
};

export default AddProductType;
