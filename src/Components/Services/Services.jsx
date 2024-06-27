import React from 'react'
import "./Services.css";
import theme_pattern from '../../assets/theme_pattern.jpg'

const Services = () => {
  return (
    <div id='portfolio' className='services'>
       <div className="services-tittle">
        <h1>My services</h1>
        <img src={theme_pattern}  alt='' />
       </div>
       

    </div>

  )
}

export default Services