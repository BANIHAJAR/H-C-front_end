import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Section Image et Texte */}
      <div className="contact-header">
        <h1>Contact us</h1>
        <p>
          The elegant luxury bedrooms in this gallery showcase custom interior
          designs & decorating ideas. View pictures and find your perfect
          luxury bedroom design.
        </p>
      </div>
      {/* Formulaire de contact */}
      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="e.g. John Becker" name="fullname" required />
          <input type="email" placeholder="johnbecker@gmail.com" name="email" required />
        </div>
        <textarea placeholder="message" name="message" required></textarea>
        <button type="submit">ENVOYER</button>
      </form>
      {/* Carte Google Maps */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999034739991!2d2.2922924156743775!3d48.85837360870005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf12345678%3A0xabcdef123456789!2sYour%20Hotel%20Location!5e0!3m2!1sen!2sfr!4v1676059873681"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
