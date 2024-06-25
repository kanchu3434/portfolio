import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.jpg"
import profile_img from "../../assets/profile.jpeg"

const About = () => {
  return (
    <div className='about'>
<div className="about-tittle">
    <h1>About me</h1>
    {/* <img src={theme_pattern} alt="" /> */}
</div>
<div className="about-section">
    <div className="about-left">
        <img src={profile_img} alt="" />
    </div>
    <div className="about-right">
        <div className="about-para">
            <p>idhkjndiujdlknd iudhoejdpo hdlkwjd  oijfiufoiewd kjhfoiwh jufoinfkjwfh oifoewjd oijfdkwnc uyewuqg jhdkjncoiw</p>
            <p> my fassion not only frontend devlop,enyt  but also tp code fo perect websiyr</p>
        </div>
        <div className="about-skills">
            <div className="about-skill"> <p>HTML & CSS</p><hr style={{width:"50%"}} /> </div> 
            <div className="about-skill"> <p>React js</p><hr style={{width:"70%"}} /> </div>
            <div className="about-skill"> <p>Bootstrap</p><hr style={{width:"60%"}} /> </div>
            <div className="about-skill"> <p>JavaScript</p><hr style={{width:"50%"}} /> </div>
            
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>2+</h1>
                    <p>Years of experiance</p>
                </div>
                <hr/>
                <div className="about-achivement">
                    <h1>10+</h1>
                    <p>project completed</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>10+</h1>
                    <p>project completed</p>
                </div>
            </div>
    </div>
</div>
    </div>
  )
}

export default About