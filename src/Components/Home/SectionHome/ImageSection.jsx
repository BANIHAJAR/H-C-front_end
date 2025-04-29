import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"
function ImageSection() {
  
  return (
    <div className="hero" data-aos="fade-up">
      <div className="hero-overlay">
        <h2>Événements Hôtellerie H & C</h2>
        <p>
          Chez Hôtellerie H & C, nous organisons des événements inoubliables, qu'il s'agisse de mariages, 
          d'anniversaires ou de séjours professionnels. Nos espaces élégants et notre équipe dédiée 
          garantissent une expérience unique et mémorable.
        </p>
      </div>
    </div>
  );
}
export default ImageSection;