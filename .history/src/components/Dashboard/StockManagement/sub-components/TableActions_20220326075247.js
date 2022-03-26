import React from 'react'
import { FiEye, FiTrash } from 'react-icons/fi'
const TableActions = ({viewAction,deleteAction}) => {
  return (
    <div className='border border-gray-400 rounded rounded-lg'>
        <button className='px-2 py-1 first:border-r first:border-gray-400' onClick={viewAction}><FiEye/></button>
        <button className='px-2 py-1' onClick={deleteAction}><FiTrash/></button>
    </div>
  )
}

export default TableActions