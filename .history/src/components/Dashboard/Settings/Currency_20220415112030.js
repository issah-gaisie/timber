import React from "react";
import DataTable from "react-data-table-component";
import Input from "../../Input";
import Select from "../../Select";

const Currency = () => {
  return (
    <div>
      <DataTable
        className="w-full rounded rounded-lg"
        columns={notificationColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default Currency;

const ExchangeRateForm = () => {
  return (
    <form action="" className="flex space-x-3">
      <label className="block">
        <span className="block text-md  text-gray-700 mb-3">Currency</span>
        <Select options={[]} label="Select Currency" />
      </label>
      <label className="block">
        <span className="block text-md  text-gray-700 mb-3">GHC Value</span>
        <Input type="number" min="0.0" />
      </label>
    </form>
  );
};
