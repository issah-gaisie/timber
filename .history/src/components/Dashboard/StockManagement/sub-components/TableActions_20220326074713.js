import React from 'react'
import { FiEye, FiTrash } from 'react-icons/fi'
const TableActions = ({view,}) => {
  return (
    <div>
        <button><FiEye/></button>
        <button><FiTrash/></button>
    </div>
  )
}

export default TableActions