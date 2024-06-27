import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/file.png"
 import underline from "../../assets/underline.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {
  const[menu,setMenu]=useState("")
  return (
    <div className="navbar">
        <img src={logo}alt='' className='nav-img'/>
        <ul className="nav-menu">
          <li> <AnchorLink className='anchor-link'  href='home' ><p onClick={()=>setMenu("home")} > Home</p> </AnchorLink> { menu==="home"?<img src={underline} alt=''/>:<></> } </li>
          <li><AnchorLink className='anchor-link'offset={50} href="about"><p onClick={()=>setMenu("about")} >About Me</p></AnchorLink> {menu==="about"?<img src={underline} alt=''/>:<></> }</li>
          <li><AnchorLink className='anchor-link'offset={50} href="portfolio"><p onClick={()=>setMenu("portfolio")}> Portfolio</p></AnchorLink> {menu==="portfolio"?<img src={underline} alt=''/>:<></> }</li>
          <li><AnchorLink className='anchor-link'offset={50} href="contact"><p onClick={()=>setMenu("contact")}>contact</p></AnchorLink> {menu==="contact"?<img src={underline} alt=''/>:<></> }</li>
      
        </ul>
        <div className="nav-connect">
        <AnchorLink className='anchor-link'offset={50} href='contact'><p onClick={()=>setMenu('contact')}></p>connect with me</AnchorLink> 
        </div>
    </div>
  )
}

export default Navbar