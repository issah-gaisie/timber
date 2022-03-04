import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PasswordSent = () => {
let [params]=useSearchParams()
let email=params.get()
  return (
    <div>PasswordSent</div>
  )
}

export default PasswordSent