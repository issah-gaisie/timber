import React from 'react'
import Input from "../Input";

const AddressInfo = () => {
  return (
    <form className="w-full  md:w-[30rem] flex flex-col space-y-5">
    <label className="block">
      <span className="block text-md font-medium text-gray-700 mb-3">
        Location
      </span>
      <Input placeholder="Location" type="text" />
    </label>
    <label className="block">
      <span className="block text-md font-medium text-gray-700 mb-3">
        Address 1
      </span>
      <Input placeholder="First Name" type="text" />
    </label>
    <label className="block">
      <span className="block text-md font-medium text-gray-700 mb-3">
        Address 2
      </span>
      <Input placeholder="Last Name" type="text" />
    </label>
    .flex.justify-center.items-center.space-x-4
    <button
      type="submit"
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 my-3 rounded rounded-md"
    >
      Signup to Timberland
    </button>
  </form>
  )
}

export default AddressInfo