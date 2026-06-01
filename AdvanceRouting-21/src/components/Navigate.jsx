import React from 'react'
import { useNavigate } from "react-router-dom";


const Navigate = () => {
      const navigate = useNavigate()
  return (
    <div className='py-2 px-5 bg-amber-500 h-[14%]'>
        <button onClick={()=>{
        navigate('/')
      }}
      className="bg-green-700 px-4 py-4 m-2 text-white rounded cursor-pointer active:scale-95">
        Return to Home
      </button>
      <button onClick={()=>{
        navigate(-1)
      }}
      className="bg-green-700 px-4 py-4 m-2 text-white rounded cursor-pointer active:scale-95">
        Back
      </button>
       <button onClick={()=>{
        navigate(+1)
      }}
      className="bg-green-700 px-4 py-4 m-2 text-white rounded cursor-pointer active:scale-95">
        Next
      </button>
    </div>
  )
}

export default Navigate
