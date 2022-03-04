import React from 'react'

const ImageFiles = () => {
  return (
    <form>
        <div className="flex justify-center">
  <div className="mb-3 w-96">
    <label for="formFileMultiple" className="form-label inline-block mb-2 text-gray-700">Multiple files input example</label>
    <input className="form-control block w-full px-3  py-1.5  text-base font-normal  text-gray-70 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFileMultiple" multiple>
  </div>
</div>
    </form>
  )
}

export default ImageFiles