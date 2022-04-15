import React, { useState } from "react";
const EditItemModal = (props) => {
  const [visible, setVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prevState) => !prevState);
  const toggleModal = () => setVisible((prevState) => !prevState);

  return (
    <div
      className={`${
        visible ? "block" : "hidden"
      } fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50`}
    >
      <div
        className="absolute bg-black/20 w-screen h-screen cursor-pointer"
        onClick={toggleModal}
      ></div>
      <div className="relative bg-white w-[90%] sm:w-[30rem] rounded rounded-xl shadow-lg p-10 flex flex-col items-center justify-center"></div>
    </div>
  );
};

export default EditItemModal;
