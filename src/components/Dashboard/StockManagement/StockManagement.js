import React from "react";
import { Outlet } from "react-router-dom";
import { stockRoutes } from "../../../utils";
import DashboardTabLink from "../sub-components/DashboardTabLink";
import { LabelAndValue } from "../DashboardMain";
import { useState } from "react";

const StockManagement = () => {
  const [state, setState] = useState({
    numberOfCompartments:220,
    numberOfConcessions:130,
    numberOfSpecies:20,
    numberOfTrees:100

  });
  return (
    <div className="w-full h-full flex flex-col items-start">
      <h1 className="text-4xl font-extrabold my-3 mb-6  text-slate-700">Stock Management</h1>
      <div className="hidden md:grid w-full  grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <LabelAndValue
          label={"Compartments"}
          value={state.numberOfCompartments}
          className="text-gray-500/75"
        />
        <LabelAndValue
          label={"Concessions"}
          value={state.numberOfConcessions}
          className="text-orange-500/75"
          active
        />
        <LabelAndValue
          label={"Species"}
          value={state.numberOfSpecies}
          className="text-yellow-800/75"
        />
         <LabelAndValue
          label={"Trees"}
          value={state.numberOfTrees}
          className="text-green-700/75"
        />
      </div>
      <nav className="w-full text-left py-5 border-b border-gray-300 mb-2 flex flex-wrap">
        {stockRoutes.map((route) => (
          <DashboardTabLink {...route} />
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default StockManagement;
