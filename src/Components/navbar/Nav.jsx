import React, { useState } from "react";
import "./NavStyle.css";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi"; // Import de l'icône

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(false); // Nouvel état

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleRoomsMenu = () => {
    setIsRoomsOpen(!isRoomsOpen);
  };

  return (
    <nav className="navbar">
      <button className="menu-icon" onClick={toggleMenu}>☰</button>

      <div className="logo">
        <Link to='/'>
          <img src="/public/logo.jpg" alt="HC Hôtellerie" className="logo-img" />
        </Link>
      </div>

      <Link to="/rooms"><button className="reservation-btn">Réservation</button></Link>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/">Offres</Link></li>
            <li>
              <button onClick={toggleRoomsMenu} className="dropdown-toggle">Nos Chambres<FiChevronDown className={isRoomsOpen ? "chevron-icon rotate" : "chevron-icon"}/></button>
              {isRoomsOpen && (
                <ul className="submenu">
                  <li><Link to="/Standard">Chambre Double Deluxe</Link></li>
                  <li><Link to="/">Chambre Single Deluxe</Link></li>
                  <li><Link to="/Standard">Chambre Double Premium</Link></li>
                  <li><Link to="/">Chambre Single Premium</Link></li>
                  <li><Link to="/">Chambre Triple</Link></li>
                  <li><Link to="/">Suite Junior</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/Galerie">Galerie</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Réservation</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;