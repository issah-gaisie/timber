import React from "react";

const Search = (props) => {
  return (
    <input
      type="search"
      className="text-gray-400 italic px-3 placeholder:text-gray-400 placeholder:italic h-10 w-full md:w-[30rem] bg-white focus:outline-2 focus:outline-tclPrimary/75 my-3 rounded rounded-lg"
      placeholder={props.placeholder ? props.placeholder : "Search ..."}
    />
  );
};

export default Search;
