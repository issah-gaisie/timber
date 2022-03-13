import React from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full my-3">
      <button onClick={() => navigate(-1)}>
        <RiArrowLeftLine className="text-2xl px-2 py-1  hover:text-white hover:text-2xl  hover:bg-green-600" />
      </button>
    </div>
  );
};

export default GoBack;
