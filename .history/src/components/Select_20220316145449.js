import React from 'react'

const Select = (props) => {
    return (
      <select
        className="w-full rounded rounded-sm border border-gray-300 py-1 px-2 outline-none disabled:bg-transparent disabled:border-none disabled:px-0 disabled:py-1 disabled:text-gray-400  "
        {...props}
      >
          {props.options.map(())}
      </select>
    );
  };
  

export default Select