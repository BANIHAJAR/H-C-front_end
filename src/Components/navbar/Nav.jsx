import React, { useState } from "react";
import "./NavStyle.css";
import logo from "/image.png"; // Remplacez par le chemin de votre logo

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
      <div className="logo">
        <img src={logo} alt="HC Hôtellerie" className="logo-img" />
      </div>

      {/* Bouton Réservation */}
      <button className="reservation-btn">Réservation</button>

      {/* Menu déroulant */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Offres</a></li>
            <li className="dropdown">
              <a href="#">Nos Chambres ▼</a>
              <ul className="submenu">
                <li><a href="#">Chambre Double</a></li>
                <li><a href="#">Chambre Single</a></li>
                <li><a href="#">Chambre Triple</a></li>
                <li><a href="#">Suite Junior</a></li>
              </ul>
            </li>
            <li><a href="#">Galerie</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Réservation</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;