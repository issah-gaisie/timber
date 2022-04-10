import React from "react";

const Input = (props) => {
  return (
    <input
      className={`w-full min-w-[20rem] rounded rounded-sm border border-gray-300 py-1 px-2 outline-none disabled:bg-transparent disabled:border-none disabled:px-0 disabled:py-1 disabled:text-gray-400 ${props.className}  `}
      {...props}
    />
  );
};

export default Input;
