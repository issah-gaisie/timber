import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  set
  const params=useParams()
  useEffect(() => {
    handleGetUser()
  }, []);

  const handleGetUser=()=>{
    console.log('getting user with id',params.id)
  }

  return (
    <div className="w-full flex flex-col md:flex-row bg-white">

    </div>
  )
}

export default UserDetails