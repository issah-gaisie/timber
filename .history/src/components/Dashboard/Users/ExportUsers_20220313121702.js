import React, { useState } from 'react'

const userTypes=[
    'all',
    'active',
    'deactivated'
]
c
const ExportUsers = () => {
    const [state, setState] = useState({
        userType:'all',
        fileType:'pdf',
    });
  return (
    <div className='p-3'>
        <h2 className="text-2xl font-bold text-gray-700">
            Export Users
        </h2>
        <form>


        </form>
    </div>
  )
}

export default ExportUsers