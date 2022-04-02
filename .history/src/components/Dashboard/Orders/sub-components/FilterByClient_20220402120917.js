import React from 'react'
import Select from 'react-select';


const testClients = [
    { label: "Ernest", value: "Ernest" },
    { label: "Earnest", value: "Earnest" },
    { label: "Ear-nest", value: "Ear-nest" },
  ];


const FilterByClient = ({
    filter,
    changeHandler,
    toggleFilters,
    shouldFilter,
  }) => {
    const cancelFiltersHandler = async () => {
      await changeHandler("");
      toggleFilters();
    };
    return (
      <div className="flex flex-col md:flex-row md:items-stretch md:space-x-3 justify-end">
        {shouldFilter && (
          <Select
            placeholder="Select A Client"
            
            onChange={(item) => changeHandler(item.value)}
            options={testClients}
            className="w-full md:w-[20rem] mb-3 md:mb-0"
            name="client"
          />
        )}
        {shouldFilter ? (
          <button
            className="rounded rounded-md bg-red-700 hover:bg-red-800 hover:shadow-md self-end  text-white py-1 px-2"
            onClick={cancelFiltersHandler}
          >
            Cancel
          </button>
        ) : (
          <button
            className="rounded rounded-md bg-gray-700 hover:bg-gray-800 hover:shadow-md text-white self-end py-1.5 px-2"
            onClick={toggleFilters}
          >
            Filter by Client
          </button>
        )}
      </div>
    );
  };

export default FilterByClient