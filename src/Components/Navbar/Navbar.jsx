import React from 'react'
import "./Navbar.css"
import logo from "../../assets/file.png"

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo}alt='' className='nav-img'/>
        <ul className="nav-menu">
          <li>Home</li>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>contact</li>
      
        </ul>
        <div className="nav-connect">
          connect with me
        </div>
    </div>
  )
}

export default Navbar