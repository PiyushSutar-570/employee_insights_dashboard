import React from 'react'
import { useParams } from 'react-router-dom'
const Details = () => {
  const {id} = useParams();
  return (
    <div className='p-6'>
      <h1>Employee details-{id}</h1>
    </div>
  )
}

export default Details
