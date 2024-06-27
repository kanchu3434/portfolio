import React from 'react'
import "./Heroin.css"
import profile from "../../assets/profile.jpeg"
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Heroin = () => {
  return (
    <div  id="home" className="heroin">
        <img src={profile}alt='' className='profile-img'/>
        <h1><span>I am Kanchan </span>,Full Stack Developer based in Ahamednagar</h1>
        <p> I am full stck developer from ahamednagar and i am passionate with my work</p>
        <div className="heroin-action">
            <div className="heroin-connect"> <AnchorLink className='anchor-link'offset={50} href='contact'><p onClick={()=>setMenu('contact')}></p>connect with me</AnchorLink> </div>
            <div className="heroin-resume">My resume</div>
        </div>
    </div>
  )
}

export default Heroin