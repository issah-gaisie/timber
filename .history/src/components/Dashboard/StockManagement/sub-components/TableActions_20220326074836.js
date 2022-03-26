import React from 'react'
import { FiEye, FiTrash } from 'react-icons/fi'
const TableActions = ({viewAction,deleteAction}) => {
  return (
    <div className='border border-gray-600 rounded rounded-lg'>
        <button onClick={viewAction}><FiEye/></button>
        <button onClick={deleteAction}><FiTrash/></button>
    </div>
  )
}

export default TableActions