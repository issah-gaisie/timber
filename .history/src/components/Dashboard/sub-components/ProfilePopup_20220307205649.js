import React from 'react'

const SettingsPopup = () => {
    return (
      <div className="flex flex-col items-center bg-white shadow-md rounded rounded-lg absolute right-4 top-[125%] p-3 w-40 ">
        <div className="h-12 w-12 rounded rounded-full bg-green-700"></div>
        <div className="flex space-x-4 mt-4">
          <button className="group">
            <RiSettings5Line className="group-hover:hidden text-2xl text-gray-700" />
            <RiSettings5Fill className="hidden group-hover:block text-2xl text-gray-700" />
          </button>
          <button className="group">
            <RiShutDownLine className="group-hover:hidden text-2xl text-red-600" />
            <RiShutDownFill className="hidden group-hover:block text-2xl text-red-700" />
          </button>
        </div>
  
        {/* <button className="w-full py-1  rounded rounded-sm border border-[#D3F3BE] hover:bg-[#D3F3BE]  hover:text-lime-700 mb-2 ">
          Settings
        </button>
        <button className="w-full py-1 rounded rounded-sm bg-red-600 hover:bg-red-700 text-white hover:font-semibold">
          Logout
        </button> */}
      </div>
    );
  };
  

export default ProfilePopup