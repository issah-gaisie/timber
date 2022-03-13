import React from "react";
import AnimatedNumber from "animated-number-react";
const DashboardMain = () => {
  const [state,setState
  return (
    <div className="w-full h-full p-6 flex flex-col items-start">
      <h1 className="text-4xl font-extrabold my-3 text-slate-700">Dashboard</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-sm min-h-[5vh] rounded rounded-lg p-6">
            <AnimatedNumber
              
            />
        </div>
        <div className="bg-white shadow-sm min-h-[5vh] rounded rounded-lg"></div>
      </div>
    </div>
  );
};

export default DashboardMain;
