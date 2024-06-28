import React from 'react'
import "./Contact.css"
import mail_icon from "../../assets/mail-icon.png";
import location_icon from "../../assets/location-icon.png";
import call_icon from "../../assets/call.png";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "182a2fb3-d4ef-44a7-84b4-c7629ea2ba15");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

  
  return (
    <div id='contact' className="contact">
      <div className="contact-tittle">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p> I am curently available to take job</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /><p>kanchankotkat001@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /><p>Ahemadnagar, Rahuri,karajagoan</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /><p>9028741372</p>
            </div>
          </div>
        </div>
        <from onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your name</label>
          <input type="text" placeholder='enter your name' name='name' />
          <label >your Email</label>
          <input type="text" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='enter your message'></textarea>
          <button onSubmit={onSubmit} className="contact-submit" type='submit'>Submit now</button>
        </from>
      </div>
    </div>

  )
}

export default Contact