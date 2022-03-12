import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const params=useSearchParams()
  useEffect(() => {
    handleGetUser()
  }, []);

  const handleGetUser=()=>{
    console.log('getting user with id',params)
  }

  return (
    <div className="w-full flex flex-col md:flex-row bg-white">

    </div>
  )
}

export default UserDetails