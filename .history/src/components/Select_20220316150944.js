import React from 'react'

const Select = (props) => {
    return (
      <select
        className="w-full rounded rounded-sm border border-gray-300 py-1 px-2 outline-none disabled:bg-transparent disabled:border-none disabled:px-0 disabled:py-1 disabled:text-gray-400  "
        {...props}
      >
          <option selected di>Select A Concession</option>
          {props.options.map((item,index)=><option key={index} value={item.id}>{item.concessionName}</option>)}
      </select>
    );
  };
  

export default Select