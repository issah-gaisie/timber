import React from "react";
import GoBack from "../../sub-components/GoBack";
import { FormGrid } from "../../Users/AddANewUser";
import Input from "../../../Input";
import toast from "react-hot-toast";
import { useState } from "react";
import TextArea from "../../../TextArea";
import TeamMemberForm from "./sub-components/TeamMemberForm";

const AddTeam = () => {
  const [state, setState] = useState({
    teamName: "",
    isActive: false,
    description: "",
    managerId: "",
    supervisorId: "",
    driverId: "",
    teamMembers: [],
  });

  const handleChange = (e) => {
    const { value, id } = e.target;
    setState((oldState) => ({ ...oldState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createUserPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "User Created Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // handles the toast loader for the login process
    toast.promise(createUserPromise, {
      loading: "Creating User",
      success: "User Created Successfully",
      error: "User Create Failed",
    });
  };
  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit}>
      <GoBack />
      <h2 className=" text-xl font-medium text-gray-700 my-2">New Team</h2>
      <FormGrid>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Team Name
          </span>
          <Input
            placeholder="Team Name"
            type="text"
            value={state.teamName}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">Description</span>
          <TextArea
            placeholder="Description"
            type="text"
            value={state.description}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Supervisor
          </span>
          <Input
            placeholder="Supervisor"
            type="text"
            value={state.supervisorId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Manager
          </span>
          <Input
            placeholder="Manager"
            type="text"
            value={state.managerId}
          />
        </label>
        <label className="block">
          <span className="block text-md  text-gray-700 mb-3">
            Driver
          </span>
          <Input
            placeholder="Driver"
            type="text"
            value={state.driverId}
          />
        </label>
      </FormGrid>
      <h3 className=" text-lg font-medium text-gray-700 my-2">Team Members</h3>
      <TeamMemberForm disabled={false} />

      {/* <div className='mt-3'>
        <input
          placeholder="Number of Trees Remaining"
          type="checkbox"
          id="isActive"
          value={state.isActive}
        />
        <span className="text-md  text-gray-700 ml-3">Active</span>
      </div> */}
      <button
        type="submit"
        className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
      >
        Create Team
      </button>
    </form>
  );
};

export default AddTeam;
