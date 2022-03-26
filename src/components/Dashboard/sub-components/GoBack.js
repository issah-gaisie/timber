import React from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full my-3">
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="group px-2 py-1 hover:bg-lime-700 rounded rounded-lg hover:shadow-md "
      >
        <RiArrowLeftLine className="text-2xl text-gray-500 group-hover:text-white" />
      </button>
    </div>
  );
};

export default GoBack;
