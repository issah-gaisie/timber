import React from 'react'
import { FiEye, FiTrash } from 'react-icons/fi'
const TableActions = ({viewAction,deleteAction}) => {
  return (
    <div>
        <button onClick={viewAction}><FiEye/></button>
        <button onClick={deleteAction}><FiTrash/></button>
    </div>
  )
}

export default TableActions