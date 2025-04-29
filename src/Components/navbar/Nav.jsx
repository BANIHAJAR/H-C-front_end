import React, { useState } from "react";

import "./NavStyle.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour afficher/masquer le menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Icône du menu */}
      <button className="menu-icon" onClick={toggleMenu}>☰</button>

      {/* Logo */}
      <div className="logo"><Link to='/'>
        <img src="/public/logo.jpg" alt="HC Hôtellerie" className="logo-img" /></Link>
      </div>

      {/* Bouton Réservation */}
      <button className="reservation-btn">Réservation</button>

      {/* Menu déroulant */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/">Offres</Link></li>
            <li className="dropdown">
              <Link to="/rooms">Nos Chambres ▼</Link>
              <ul className="submenu">
                <li><Link to="/">Chambre Double</Link></li>
                <li><Link to="/">Chambre Single</Link></li>
                <li><Link to="/">Chambre Triple</Link></li>
                <li><Link to="/">Suite Junior</Link></li>
              </ul>
            </li>
            <li><Link to="/">Galerie</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Réservation</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;