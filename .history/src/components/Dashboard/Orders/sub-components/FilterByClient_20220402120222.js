import React from 'react'

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
      <div className="flex flex items-stretch space-x-3 justify-end">
        {shouldFilter && (
          <Select
            placeholder="Select A Client"
            onChange={(item) => changeHandler(item.value)}
            options={testClients}
            className="w-full md:w-[20rem]"
            name="client"
          />
        )}
        {shouldFilter ? (
          <button
            className="rounded rounded-md bg-red-700 hover:bg-red-800 hover:shadow-md  text-white py-1 px-2"
            onClick={cancelFiltersHandler}
          >
            Cancel
          </button>
        ) : (
          <button
            className="rounded rounded-md bg-gray-700 hover:bg-gray-800 hover:shadow-md text-white py-1.5 px-2"
            onClick={toggleFilters}
          >
            Filter by Client
          </button>
        )}
      </div>
    );
  };

export default FilterByClient