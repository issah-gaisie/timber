import React from 'react'
import { FiEye, FiTrash } from 'react-icons/fi'
const TableActions = ({viewAction,deleteAction}) => {
  return (
    <div className='border border-gray-400 rounded rounded-lg'>
        <button className='text-gray-500 px-2 py-1 first:border-r first:border-gray-400 hover:bg-gray-700 hover:text-white' onClick={viewAction}><FiEye/></button>
        <button className='text-gray-500 px-2 py-1 hover:bg-red-500 hover:text-white' onClick={deleteAction}><FiTrash/></button>
    </div>
  )
}

export default TableActions