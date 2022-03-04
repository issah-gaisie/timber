import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const ImageFiles = async() => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // dummy signup promise
    const signupPromise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            message: "Signed up Successfully",
            status: 200,
            data: [],
          }),
        1000
      )
    );
    // toast handler for signup
    await toast.promise(signupPromise, {
      loading: "Creating Account",
      success: "Account has been created",
      error: "Error Signup failed",
    });

    navigate("/password-sent?email=test@gmail.com");
  };
  return (
    <form
      className="w-full  md:w-[30rem] flex flex-col space-y-5"
      onSubmit={handleSubmit}
    >
      <h2 className=" text-lg font-medium text-gray-700">Image Info</h2>
      <div className="flex justify-center">
        <div className="mb-3 w-full">
          <label
            htmlFor="formFileMultiple"
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
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 my-3 rounded rounded-md"
        >
          Finish
        </button>
      </div>
    </form>
  );
};

export default ImageFiles;
