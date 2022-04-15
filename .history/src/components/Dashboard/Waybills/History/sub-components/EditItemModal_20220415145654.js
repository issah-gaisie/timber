import React, { useState } from "react";

const EditItemModal = (props) => {
  //   const [visible, setVisible] = useState(false);
  //   const toggleModal = () => setVisible((prevState) => !prevState);

  return (
    <div
      className={`${
        props.visible ? "block" : "hidden"
      } fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50`}
    >
      <div
        className="absolute bg-black/20 w-screen h-screen cursor-pointer"
        onClick={props.hide}
      ></div>
      <div className="relative bg-white w-[90%] sm:w-[30rem] rounded rounded-xl shadow-lg  flex flex-col items-center justify-center">
        {props.children}
      </div>
    </div>
  );
};

export default EditItemModal;
