import React from "react";
import GoBack from "../../sub-components/GoBack";
import { FormGrid } from "../../Users/AddANewUser";
import Input from "../../../Input";
import toast from "react-hot-toast";
import { useState } from "react";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";
import TextArea from "../../../TextArea";
import TeamMemberForm from "./sub-components/TeamMemberForm";
import TeamMemberList from "./sub-components/TeamMemberList";

const EditTeam = () => {
  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useState({
    teamName: "",
    isActive: false,
    description: "",
    managerId: "",
    supervisorId: "",
    driverId: "",
    teamMembers: [],
  });
  const toggleDisable = () => setDisabled((oldState) => !oldState);

  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createTeamPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Team Created Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(createTeamPromise, {
      loading: "Creating Team",
      success: "Team Created Successfully",
      error: "Team Create Failed",
    });
  };
  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit}>
      <GoBack />
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
        {state.isActive ? (
          <button
            type="button"
            className="text-sm text-red-600 bg-red-200 px-2 py-0.5 rounded rounded-lg hover:font-medium hover:ring-2 hover:ring-red-600/50"
          >
            - Deactivate
          </button>
        ) : (
          <button
            type="button"
            className="text-sm text-green-600 bg-green-200 px-2 py-0.5 rounded rounded-lg hover:font-medium hover:ring-2 hover:ring-green-600/50"
          >
            + Activate
          </button>
        )}
      </div>
      <h2 className=" text-xl font-medium text-gray-700 my-2">
        {disabled ? "Team Details" : "Edit Team"}
      </h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Team Name</span>
          <Input
            placeholder="Team Name"
            disabled={disabled}
            type="text"
            value={state.teamName}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Description</span>
          <TextArea
            placeholder="Description"
            disabled={disabled}
            type="text"
            value={state.description}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Supervisor</span>
          <Input
            placeholder="Supervisor"
            type="text"
            disabled={disabled}
            value={state.supervisorId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Manager</span>
          <Input
            placeholder="Manager"
            type="text"
            disabled={disabled}
            value={state.managerId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Driver</span>
          <Input
            placeholder="Driver"
            type="text"
            disabled={disabled}
            value={state.driverId}
          />
        </label>
      </FormGrid>
      <h3 className=" text-lg font-medium text-gray-700 my-2">Team Members</h3>
      <TeamMemberList disabled={disabled} />

      {!disabled && (
        <>
          <h3 className="font-medium text-gray-700 my-2">Add Team Members</h3>
          <TeamMemberForm />
        </>
      )}

      {!disabled && (
        <button
          type="submit"
          className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
        >
          Edit Team
        </button>
      )}
    </form>
  );
};

export default EditTeam;
