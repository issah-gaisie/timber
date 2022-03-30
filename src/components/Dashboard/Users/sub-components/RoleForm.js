import React, { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import Select from "react-select";
import { useEffect } from "react";
import toast from "react-hot-toast";
const RoleForm = ({ defaultValue }) => {
  const [value, setValue] = useState([]);
  const [roleDisabled, setRoleDisabled] = useState(true);
  const toggleRoleDisability = () => setRoleDisabled((oldState) => !oldState);
  const handleChange = (value) => setValue(value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const rolesUpdatePromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Roles Updated Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    await toast.promise(rolesUpdatePromise, {
      loading: "Updating Roles",
      success: "Roles Updated Successfully",
      error: "Roles Update Failed",
    });
    rolesUpdatePromise.then((results) => console.log(results));
    
    setRoleDisabled(true)
  };
  useEffect(() => {
    setValue(defaultValue);
  }, []);

  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit}>
      <div className="flex justify-between w-full items-center">
        <h2 className=" text-xl font-medium text-gray-700 my-4">Roles</h2>
        <div>
          {roleDisabled && (
            <button
              type="button"
              onClick={toggleRoleDisability}
              className="text-xs text-slate-600 bg-slate-200 px-2 py-0.5 rounded rounded-full mr-2 hover:font-medium hover:ring-2 hover:ring-slate-600/50 flex items-center"
            >
              <RiEditLine className="mr-1" /> Edit Roles
            </button>
          )}
          {!roleDisabled && (
            <button
              type="button"
              onClick={toggleRoleDisability}
              className="text-xs text-red-600 bg-red-200 px-2 py-0.5 rounded rounded-full mr-2 hover:font-medium hover:ring-2 hover:ring-red-600/50 flex items-center"
            >
              <RiEditLine className="mr-1" /> Cancel{" "}
            </button>
          )}
        </div>
      </div>

      {/* <RolePill/> */}
      <Select
        className="w-full max-w-[30rem]"
        value={value}
        isDisabled={roleDisabled}
        options={options}
        onChange={(value) => handleChange(value)}
        isMulti
      />

      {!roleDisabled && (
        <button className="self-end rounded rounded-lg hover:shadow-md px-3 py-1 text-white bg-tclPrimary">Save</button>
      )}
    </form>
  );
};

export default RoleForm;

const options = [
  { value: "admin", label: "Admin", isFixed: true },
  { value: "non-admin", label: "Non-Admin", isFixed: true },
];
