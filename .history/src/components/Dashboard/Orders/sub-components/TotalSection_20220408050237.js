import React from "react";

const TotalSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 w-full md:w-[20rem] self-end">
      <AmountSection label={"Number of Items"} value={12} />
      <AmountSection label={"VAT"} value={12} />
      <AmountSection label={"Total Amount"} value={12} />
    </div>
  );
};

export default TotalSection;

const AmountSection = ({ label, value }) => {
  return (
    <div className="px-2 py-3 text-tclPrimary bg-tclPrimary/20 flex items-center justify-between first:rounded-t first:rounded-t-lg last:rounded-b last:rounded-b-lg">
      <span className="font-semibold">{label}</span>
      <span className="">{value}</span>
    </div>
  );
};
