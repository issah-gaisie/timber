import React from "react";

const Input = (props) => {
  return (
    <input
      className="w-full rounded rounded-md border border-gray-300 py-1 outline-none placeholder:px-4"
      {...props}
    />
  );
};

export default Input;
