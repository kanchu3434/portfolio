import React from 'react'
import "./Heroin.css"
import profile from "../../assets/profile.jpeg"

const Heroin = () => {
  return (
    <div className="heroin">
        <img src={profile}alt='' className='profile-img'/>
        <h1><span>I am Kanchan </span>,Full Stack Developer based in Ahamednagar</h1>
        <p> I am full stck developer from ahamednagar and i am passionate with my work</p>
        <div className="heroin-action">
            <div className="heroin-connect">Connect with me</div>
            <div className="heroin-resume">My resume</div>
        </div>
    </div>
  )
}

export default Heroin