import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

const UserDetails = () => {
  const params=useSearchParams()
  useEffect(() => {
   
  }, []);

  const handleGetUser=()=>{
    console.log('getting user with id',)
  }

  return (
    <div className="w-full flex flex-col md:flex-row bg-white">

    </div>
  )
}

export default UserDetails