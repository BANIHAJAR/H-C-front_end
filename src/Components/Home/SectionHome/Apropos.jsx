import React from "react";
const Apropos = () => {
    return (
      <section className="apropos-section">
        {/* Contenu Texte */}
        <div className="apropos-content">
          <h2>  À propos  H&C Hôtellerie </h2>
          <p>
          H&C Hôtellerie est un hôtel de luxe offrant une expérience authentique et élégante à ses clients.
          Sa mission est de fournir un cadre paisible, un service haut de gamme, et des installations modernes pour répondre
          aux attentes d’une clientèle exigeante et diversifiée. L’hôtel se distingue par des hébergements alliant confort et 
          sophistication, une gamme variée de services personnalisés tels que le spa, le restaurant gastronomique et l’organisation 
          d’événements, tout en mettant un point d’honneur à la satisfaction client et à la qualité de l’expérience
          </p>
          <a href="" >En savoir plus</a>
        </div>
  
        {/* Image */}
        <div className="apropos-image">
          <img src="https://images.pexels.com/photos/5371575/pexels-photo-5371575.jpeg" />
        </div>
      </section>
    );
  };
  
  

export default Apropos;