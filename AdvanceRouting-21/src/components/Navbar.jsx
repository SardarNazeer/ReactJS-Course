import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-800 justify-between'>
        <h2 className="text-xl font-bold">Coding</h2>
        <div className="flex gap-8">

            <Link to='/' >Home</Link>
            <Link to='/contact' >Contact Us</Link>
            <Link to='/about' >About Us</Link>
            <Link to='/product' >Product</Link>
            <Link to='/courses' >Courses</Link>


        </div>
      
    </div>
  )
}

export default Navbar
