import React from "react";

const TextArea = (props) => {
  return (
    <input
      className="w-full rounded rounded-sm border border-gray-300 py-1 px-2 outline-none disabled:bg-transparent disabled:border-none disabled:px-0 disabled:py-1 disabled:text-gray-400  "
      {...props}
    />
  );
};

export default TextArea;
