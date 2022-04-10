import React from "react";
import Input from "../../../../Input";

const GetOrder = () => {
  const handleSubmit = () => {};
  return (
    <form className="flex space-x-2 items-end ">
      <label className="block">
        <span className="block text-md  text-gray-700 mb-3">
          Enter Order Number
        </span>
        <Input
          placeholder="Enter Order Number"
          type="text"
          value={state.compartmentName}
        />
      </label>
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
