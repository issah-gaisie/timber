import React from "react";
import { useNavigate } from "react-router-dom";

const AddnExport = () => {
  const navigate = useNavigate();
  const handleAdd=()=>navigate('add')
  return (
    <div className="w-full my-3 flex justify-end space-x-3">
      <button
        className="bg-tclPrimary/90 hover:tclPrimary px-3 py-1 5 text-white rounded rounded-md hover:shadow-md"
        onClick={handleAdd}
      >
        + Add
      </button>
      <button
        className="bg-tclPrimary/25 hover:shadow-sm hover:bg-tclPrimary/50 px-3 py-1 5 text-tclPrimary rounded rounded-md "
        // onClick={handleAdd}
      >
        Export
      </button>
    </div>
  );
};

export default AddnExport;
