import React, { useState } from "react";
import Input from "../../../../Input";
import { FormGrid } from "../../../Users/AddANewUser";

const GetOrder = () => {
  const [state, setState] = useState({
    orderNumber: "",
  });
  const handleSubmit = () => {};

  return (
    <form className="flex space-x-2 items-end my-5 ">
      <div
        className="gap-4 2xl:px-0"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
        }}
      >
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Enter Order Number
          </span>
          <Input
            placeholder="Enter Order Number"
            type="text"
            value={state.orderNumber}
          />
        </label>
      </div>
      <button
        type="submit"
        className="w-auto px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-1 rounded rounded-md"
      >
        Get Order
      </button>
    </form>
  );
};

export default GetOrder;
