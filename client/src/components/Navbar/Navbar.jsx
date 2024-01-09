import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="navbar">
          <div className="container-left">
      <div className="logo">
        <img src="" alt="Logo" />
      </div>
      <div className="elements"><Link className='link' to="/">Home</Link></div>
      <div className="elements"><Link className='link' to="/about">About</Link></div>
      <div className="elements"><Link className='link' to="/contact">Contacts</Link></div>
      <div className="elements"><Link className='link' to="/more">More</Link></div>
   
    </div>
    <div className="container-right">
      <div className="login">
        <button className="loginbtn">Login</button>
      </div>
      <div className="something">Some</div>
    </div>
    </div>
    </>
  )
}

export default Navbar