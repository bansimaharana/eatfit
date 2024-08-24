import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const errordetails = useRouteError();
    console.log("erroe",errordetails)
  return (
    <div className='text-danger flex-colum  justify-content-center align-items-center' style={{position:"absolute", left:"50%", top:"50%", transform:"translate(-50%, -50%)"}}>
        <h1>opps something went wrong </h1>
        <h2>Error:{errordetails?.status} ({errordetails?.statusText})</h2>
        <h3>{errordetails?.data}</h3>
    </div>
  )
}
