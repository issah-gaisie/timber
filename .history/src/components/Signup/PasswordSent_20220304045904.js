import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PasswordSent = () => {
let [params]=useSearchParams()
let email=params.get('email')
  return (
    <div>
        Password Has Been Sent to {email}
    </div>
  )
}

export default PasswordSent