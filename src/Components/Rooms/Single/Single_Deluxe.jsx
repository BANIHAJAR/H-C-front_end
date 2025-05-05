import React from "react";
import "./../Rooms.css";
import { Link } from "react-router-dom";


export default function HotelRoomPage() {

  const images = ["https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg",
  "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
  "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 
];

  return (
    <div className="hotel-container">

      {/* Hero Section */}
      <section className="hotel-hero">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
           alt="Chambre d'hôtel" className="hero-image" />
      </section>

      {/* Room Info Section */}
      <section className="room-info">
        <div className="hotel-card">
          <div className="hotel-icon">🛏</div>
          <h2 className="hotel-card-title">Capacité</h2>
          <p>2 Adultes<br />Lit double<br />17 m² avec terrasse</p>
        </div>

        <div className="hotel-amenities">
          <h3 className="section-title">Équipements de la chambre</h3>
          <div className="amenities-columns">
            <ul>
              <li>HD TV satellite</li>
              <li>Accès Internet WIFI gratuit</li>
              <li>Credit cards</li>
              <li>Restaurant</li>
            </ul>
            <ul>
              <li>Room service</li>
              <li>Matériel de repassage</li>
              <li>Service voiturier</li>
              <li>Service de réveil</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Room Gallery */}
      <section className="hotel-gallery">
        {images.map((src, i) => (
          <div key={i} className="gallery-item">
            <img src={src} alt={`Chambre ${i + 1}`} className="gallery-image" />
          </div>
        ))}
      </section>

      {/* Room Description */}
      <section className="hotel-description">
        <h3 className="section-title">À propos de cette chambre</h3>
        <p className="section-p">
        La Chambre Single Deluxe de l'hôtel IDOU ANFA allie confort, élégance et modernité dans un cadre spacieux, offrant une vue imprenable sur la ville et une insonorisation parfaite pour des nuits paisibles. C’est le choix idéal pour les voyageurs d’affaires
        </p>
        <Link to="/rooms"><button className="reserve-button">RÉSERVEZ</button></Link>
      </section>

    </div>
  );
}
