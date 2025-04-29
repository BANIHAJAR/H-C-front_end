import React from "react";
import "./Standard.css";

import image1 from "./img/image1.jpg";
import image2 from "./img/image2.jpg";
import image3 from "./img/image3.jpg";
import image4 from "./img/image4.jpg";
import image5 from "./img/image5.jpg";
import image6 from "./img/image6.jpg";

export default function HotelRoomPage() {

  const images = [image1, image2, image3, image4, image5, image6];

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
        <p>
          Les chambres Standards ont une surface de 17 m² environ (salle de bain comprise). Les chambres
          disposent de : un Lit double, une Salle de bain, un Dressing, un espace Bureau, un TV Satellite,
          Air conditionné, Accès Internet WIFI Gratuit, Téléphone direct, Coffre-fort et Sèche-cheveux.
          La salle de bain est équipée d'une douche.
        </p>
        <button className="reserve-button">RÉSERVEZ</button>
      </section>

    </div>
  );
}
