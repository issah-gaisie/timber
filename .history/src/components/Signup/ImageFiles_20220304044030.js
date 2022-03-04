import React from "react";
import { Link } from "react-router-dom";

const ImageFiles = () => {
  return (
    <form>
        
      <div className="flex justify-center">
        <div className="mb-3 md:w-96">
          <label
            for="formFileMultiple"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Upload Your Files
          </label>
          <input
            className="form-control block w-full px-3  py-1.5  text-base font-normal  text-gray-70 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <Link to={-1} className="w-full">
          <button className="w-full bg-indigo-100 hover:bg-indigo-200 hover:ring hover:ring-indigo-600 text-indigo-600  font-semibold py-2 my-3 rounded rounded-md">
            Back
          </button>
        </Link>
        <Link to={"/signup/image"} className="w-full">
          <button
            //   type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 my-3 rounded rounded-md"
          >
            Continue
          </button>
        </Link>
      </div>
    </form>
  );
};

export default ImageFiles;
