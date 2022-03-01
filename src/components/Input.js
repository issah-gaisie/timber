import React from "react";

const Input = (props) => {
  return (
    <input
      className="w-full rounded rounded-sm border border-gray-300 py-1 px-2 outline-none "
      {...props}
    />
  );
};

export default Input;
