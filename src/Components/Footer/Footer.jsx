import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='caption'>
        <h1>
          <span style={{ color: "red" }}>COLO</span>
          <span>SHOP</span>
        </h1>
        </div>
        <div className='footer-options'>
            <p> Our service</p>
            <h4>About us</h4>
            <h4>Our work</h4>
            <h4>Pricing</h4>
            <h4>Help center</h4>
            <h4>Login</h4>
        </div>
        <div className='footer-options'>
            <p>Company</p>
            <h4>Terms of Use</h4>
            <h4>Contact Us</h4>
        </div>
        <div className='footer-options'>
            <p>Follow us</p>
            <h4>Facebook</h4>
            <h4>LinkedIn</h4>
            <h4>Instagram</h4>
            <h4>Youtube</h4>
        </div>
    </div>
  )
}

export default Footer