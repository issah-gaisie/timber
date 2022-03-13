import React, { useState } from "react";
import AnimatedNumber from "animated-number-react";
const DashboardMain = () => {
  const [state, setState] = useState({
    activeUsers: 85,
    deactivatedUsers: 95,
  });
  const formatValue = (value) => value.toFixed(0);
  return (
    <div className="w-full h-full p-6 flex flex-col items-start">
      <h1 className="text-4xl font-extrabold my-3 text-slate-700">Dashboard</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white shadow-sm min-h-[5vh] rounded rounded-lg p-6 flex flex-col space-y-4">
        <span className="text-lg font-medium text-gray-300 uppercase">
            Users
          </span>
          <AnimatedNumber
            value={state.activeUsers + state.deactivatedUsers}
            className="text-[5vw] font-bold text-slate-500"
            formatValue={formatValue}
            duration={2000}
          />
          
        </div>
        <div className="bg-white shadow-sm min-h-[5vh] rounded rounded-lg"></div>
      </div>
    </div>
  );
};

export default DashboardMain;


const LabelAndValue=(props)=>{
  const {label,value}=props;
  return(
    <div>
      
    </div>
  );

}