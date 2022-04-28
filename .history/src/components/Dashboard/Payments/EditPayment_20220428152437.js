import React, { useState } from "react";
import Select from "../../Select";
import Input from "../../Input";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";
import TextArea from "../../TextArea";
import { FormGrid } from "../Users/AddANewUser";
import toast from "react-hot-toast";

const EditPayment = () => {
  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useState({
    paymentName: "Payment Name",
    description: "",
    isFullyPaid: "No",
    amountPaid: 2000,
    amountOutstanding: 4000,
    totalAmount: 6000,
    lastPaymentDate: new Date().toDateString(),
    user: "Ernest",
    dateCreated: new Date().toDateString(),
    paymentModeId: 45,
    paymentStatusId: 2,
    dueDate: new Date().toDateString(),
    dueDateInDays: "4 days",
    comment: "",
    waybillId: 2,
    paymentTypeId: 2,
    accountId: 4,
  });
  const toggleDisable = () => setDisabled((oldState) => !oldState);
  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editWarehousePromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Warehouse Edited Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(editWarehousePromise, {
      loading: "Editing Warehouse",
      success: "Warehouse Edited Successfully",
      error: "Warehouse Edit Failed",
    });
  };
  return (
    <form>
      <div className="flex space-x-2 self-end">
        {disabled ? (
          <div className="">
            <button
              onClick={toggleDisable}
              type="button"
              className="md:hidden rounded rounded-full p-2 shadow-lg bg-gray-700 hover:bg-gray-800 "
            >
              <RiEditBoxLine className="text-lg text-white" />
            </button>
            <button
              type="button"
              onClick={toggleDisable}
              className="hidden md:block bg-gray-700 hover:bg-gray-800 py-2 px-4 text-white text-medium font-semibold shadow-lg rounded rounded-md"
            >
              Edit
            </button>
          </div>
        ) : (
          <div>
            <button
              type="button"
              onClick={toggleDisable}
              className="md:hidden rounded rounded-full p-1.5 shadow-lg bg-red-700 hover:bg-red-800 "
            >
              <RiCloseLine className="text-lg text-white" />
            </button>
            <button
              type="button"
              onClick={toggleDisable}
              className="hidden md:block bg-red-700 hover:bg-red-800 py-2 px-4 text-white text-medium font-semibold shadow-lg rounded rounded-md"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default EditPayment;
