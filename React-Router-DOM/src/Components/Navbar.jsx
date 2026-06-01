import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <h3>App</h3>
        <div>
            {/* reloading se bachne ke liye link ka use krte hai  */}
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Product</Link>


        </div>
      
    </div>
  )
}

export default Navbar
