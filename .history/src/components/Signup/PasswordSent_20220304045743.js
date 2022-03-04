import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PasswordSent = () => {
let [params]=useSearchParams()
let email=params.ge
  return (
    <div>PasswordSent</div>
  )
}

export default PasswordSent