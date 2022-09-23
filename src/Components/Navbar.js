import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
    <Link to={'/home'} className="link">
      Home
      </Link>
      <Link to={'/list-user'} className="link">
      Student
      </Link>
      <Link to={'/contact'} className="link">
      Contact
      </Link>
    
    </div>
    </>
  )
}

export default Navbar