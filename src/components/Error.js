import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err=useRouteError()
    console.log(err)
  return (
    <div>404 Bad Request</div>
  )
}

export default Error