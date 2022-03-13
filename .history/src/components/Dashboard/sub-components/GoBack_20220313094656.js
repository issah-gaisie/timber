import React from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full my-3">
      <button onClick={() => navigate(-1)} className='px-2 py-1 hover:bg-green-600 '>
        <RiArrowLeftLine className="text-2xl  hover:text-white  " />
      </button>
    </div>
  );
};

export default GoBack;
