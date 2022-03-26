import React from "react";
import { useState } from "react";
import GoBack from "../../sub-components/GoBack";
import { FormGrid } from "../../Users/AddANewUser";
import Input from "../../../Input";
import Select from "../../../Select";
import { RiEditBoxLine, RiCloseLine } from "react-icons/ri";
import toast from "react-hot-toast";
import TextArea from "../../../TextArea";

const EditTree = () => {
  const [disabled, setDisabled] = useState(true);
  const [state, setstate] = useState({
        treeName: "",
        volume: "",
        marketValue: 0.0,
        concessionId: 0,
        compartmentId: 0,
        price: 0.0,
        description: "",
        isAvailable: false,
      });
  const toggleDisable = () => setDisabled((oldState) => !oldState);
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
          
          <h2 className=" text-xl font-medium text-gray-700 my-2">New Tree</h2>
          <FormGrid>
          <label className="block">
              <span className="block text-md  text-gray-700 mb-3">
                Tree Name
              </span>
              <Input
                placeholder="Tree Name"
                type="text"
                value={state.treeName}
              />
            </label>
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">
                Tree Volume
              </span>
              <Input
                placeholder="Tree Volume"
                type="text"
                value={state.volume}
              />
            </label>
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">
                Market Value
              </span>
              <Input
                placeholder="Market Value"
                type="text"
                value={state.marketValue}
              />
            </label>
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">
               Concession
              </span>
              <Select
                placeholder="Concession"
                type="text"
                value={state.concessionId}
                options={[]}
              />
            </label>
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">
               Compartment
              </span>
              <Select
                placeholder="Compartment"
                type="text"
                label='Select A Compartment'
                value={state.compartmentId}
                options={[]}
              />
            </label>
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">
                Price
              </span>
              <Input
                placeholder="Price"
                type="text"
                value={state.price}
              />
            </label>
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">
               Description
              </span>
              <TextArea
                placeholder="Description"
                type="text"
                value={state.description}
              />
            </label>
            
          </FormGrid>
          <div className='mt-3'>
            <input
              placeholder="Number of Trees Remaining"
              type="checkbox"
              id="isActive"
              value={state.isActive}
            />
            <span className="text-md  text-gray-700 ml-3">Active</span>
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
          >
            Edit Tree
          </button>
        </form>
      );
}

export default EditTree
