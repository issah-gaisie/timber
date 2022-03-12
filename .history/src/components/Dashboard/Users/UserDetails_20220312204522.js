import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const [state, setState] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    address1: "",
    address2: "",
  });
  const params=useParams()
  useEffect(() => {
    handleGetUser()
  }, []);

  const handleGetUser=()=>{
    setTimeout(() => {
      
    }, timeout);
    console.log('getting user with id',params.id)
  }

  return (
    <div className="w-full flex flex-col md:flex-row bg-white">

    </div>
  )
}

export default UserDetails