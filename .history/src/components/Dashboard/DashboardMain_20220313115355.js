import React, { useState } from "react";
import AnimatedNumber from "animated-number-react";
import DataTable from "react-data-table-component";

const DashboardMain = () => {
  const [state, setState] = useState({
    activeUsers: 185,
    deactivatedUsers: 95,
  });

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <div className="w-full h-full p-6 flex flex-col items-start">
      <h1 className="text-4xl font-extrabold my-3 mb-6 text-slate-700">
        Dashboard
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <LabelAndValue
          label={"Users"}
          value={state.activeUsers + state.deactivatedUsers}
          className="text-gray-500/75"
        />
        <LabelAndValue
          label={"Active Users"}
          value={state.activeUsers}
          className="text-green-500/75"
          active
        />
        <LabelAndValue
          label={"Deactivated Users"}
          value={state.deactivatedUsers}
          className="text-red-500/75"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-medium my-3 mb-6 text-gray-500">
          Activity
        </h3>
        
      </div>
    </div>
  );
};

export default DashboardMain;

const LabelAndValue = (props) => {
  const { label, value, className } = props;
  const formatValue = (value) => value.toFixed(0);
  return (
    <div
      className={`bg-white shadow-sm min-h-[5vh] rounded rounded-lg p-6 flex flex-col space-y-4 hover:shadow-md transition ease-in-out delay-150 `}
    >
      <span className="text-lg font-medium text-gray-300 uppercase">
        {label}
      </span>
      <AnimatedNumber
        value={value}
        className={`text-5xl font-bold  ${className}`}
        formatValue={formatValue}
        duration={2000}
      />
    </div>
  );
};
