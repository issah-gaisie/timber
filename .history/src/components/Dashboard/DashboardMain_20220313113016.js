import React, { useState } from "react";
import AnimatedNumber from "animated-number-react";
const DashboardMain = () => {
  const [state, setState] = useState({
    activeUsers: 185,
    deactivatedUsers: 95,
  });
  const formatValue = (value) => value.toFixed(0);
  return (
    <div className="w-full h-full p-6 flex flex-col items-start">
      <h1 className="text-4xl font-extrabold my-3 mb-6 text-slate-700">Dashboard</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <LabelAndValue label={'Users'} value={state.activeUsers+state.deactivatedUsers} />
        <LabelAndValue label={'Active Users'} value={state.activeUsers} className='ring ring-green-500/75 bg-green-50' active />
        <LabelAndValue label={'Deactivated Users'} value={state.deactivatedUsers} className='ring ring-red-500/75 bg-red-50' />
      </div>
    </div>
  );
};

export default DashboardMain;


const LabelAndValue=(props)=>{
  const {label,value,className}=props;
  const formatValue = (value) => value.toFixed(0);
  return(
    <div className={`bg-white shadow-sm min-h-[5vh] rounded rounded-lg p-6 flex flex-col space-y-4 ${className} `}>
    <span className="text-lg font-medium text-gray-300 uppercase">
        {label}
      </span>
      <AnimatedNumber
        value={value}
        className="text-5xl font-bold text-lime-500"
        formatValue={formatValue}
        duration={2000}
      />
      
    </div>
  );

}