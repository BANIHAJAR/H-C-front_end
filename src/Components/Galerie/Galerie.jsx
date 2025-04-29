import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Galerie.css";

const sections = [
  {
    title: "Chambre Double",
    images: [
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
      "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    ],
  },
  {
    title: "Chambre Single",
    images: [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      "https://images.pexels.com/photos/271640/pexels-photo-271640.jpeg",
    ],
  },
  {
    title: "Chambre Triple",
    images: [
      "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg",
      "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    ],
  },
  {
    title: "Suite Junior",
    images: [
      "https://images.pexels.com/photos/271640/pexels-photo-271640.jpeg",
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
      "https://images.pexels.com/photos/276593/pexels-photo-276593.jpeg",
    ],
  },
];

const Galerie = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <div className="galerie-hero">
        <h1 className="galerie-hero-title"data-aos="fade-up" data-aos-duration="1200">Notre Galerie</h1>
      </div>
    <section className="galerie-section">

      {sections.map((section, index) => (
        <div key={index} className="galerie-group" data-aos="fade-up">
          <h3 className="galerie-subtitle">{section.title}</h3>
          <div className="galerie-grid">
            {section.images.map((src, imgIndex) => (
              <div className="galerie-item" key={imgIndex} data-aos="zoom-in">
                <img src={src} alt={`${section.title}-${imgIndex}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
    </>
  );
};

export default Galerie;