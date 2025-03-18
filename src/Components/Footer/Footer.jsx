import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>H&C Hôtellerie</h3>
            <p><strong>Address :</strong> </p>
            <p><strong>Phone number :</strong> </p>
            <p><strong>Email:</strong></p>
          </div>
  
          <div className="footer-section">
            <p>ABOUT US</p>
            <p>CONTACT US</p>
            <p>ROOMS & RATES</p>
            <p>FACILITIES</p>
          </div>
  
          <div className="footer-section">
            <p>FACEBOOK</p>
            <p>INSTAGRAM</p>
            <p>SNAPCHAT</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  