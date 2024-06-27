import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/footer.png"
import user_icon from "../../assets/people.png"
 
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-to-left">
                <img src={footer_logo} alt="" /> kanchan
                <p>I am frontend developer ,</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left"> @2024 Kanchankotkar All rights</p>
            <div className="footer-bootom-right">
                <p>Terms of Service</p>
                <p>Priavacy policy</p>
                <p>connect with me</p>
            </div>
        </div>
    </div>
  )
}
