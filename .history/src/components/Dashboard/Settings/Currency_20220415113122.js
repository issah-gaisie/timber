import React from "react";
import DataTable from "react-data-table-component";
import Input from "../../Input";
import Select from "../../Select";
import { FormGrid } from "../Users/AddANewUser";

const Currency = () => {
  let currencyColumns = [
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Currency",
      selector: (row) => row.currency,
    },
    {
      name: "GHC Value",
      selector: (row) => `GHC ${row.ghcValue}`,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <ExchangeRateForm />
      <hr />
      <DataTable
        className="w-full rounded rounded-lg"
        columns={currencyColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default Currency;

const ExchangeRateForm = () => {
  return (
    <form action="" className="flex flex-col w-full mb-4">
      <h2>Set New Exchange Rate</h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Currency</span>
          <Select options={[]} label="Select Currency" />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">GHC Value</span>
          <Input type="number" min="0.0" />
        </label>
      </FormGrid>
    </form>
  );
};

let data = [
  {
    date: new Date().toDateString,
    currency: "USD",
    ghcValue: 7.0,
  },
  {
    date: new Date().toDateString,
    currency: "EUR",
    ghcValue: 8.0,
  },
  {
    date: new Date().toDateString,
    currency: "USD",
    ghcValue: 6.0,
  },
];
