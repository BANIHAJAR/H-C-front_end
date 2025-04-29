import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>H&C Hôtellerie</h3>
            <p><strong>Address :</strong> 123 Avenue, Paris</p>
            <p><strong>Phone number :</strong> +33 123 456 789</p>
            <p><strong>Email:</strong> contact@hc-hotellerie.com</p>
          </div>
  
          <div className="footer-section">
            <p>ABOUT US</p>
            <p>CONTACT US</p>
            <p>ROOMS & RATES</p>
            <p>FACILITIES</p>
          </div>
  
          <div className="footer-section">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">FACEBOOK</a><br/>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">INSTAGRAM</a><br/>
            <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className="footer-link">SNAPCHAT</a><br/>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  