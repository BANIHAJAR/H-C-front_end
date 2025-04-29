import React, { useState } from "react";

const images = [
  "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg",
  "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
  "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg",
  "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
  "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg",
  "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="social-gallery">
      <h2>Suivez-nous sur Instagram et Facebook</h2>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="image-container">
            <img
              src={`${src}`}
              alt={`Galerie ${index + 1}`}
              onClick={() => openImage(src)}
            />
            <div className="plus-icon" onClick={() => openImage(src)}>+</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={`${selectedImage}`} alt="Agrandie" />
        </div>
      )}
    </div>
  );
};

export default GallerySection;
