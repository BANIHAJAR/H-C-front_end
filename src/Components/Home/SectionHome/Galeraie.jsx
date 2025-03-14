import { useState } from "react";

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
];

export default function Galleraie() {
    const [startIndex, setStartIndex] = useState(0);
    const imagesPerPage = 3;
  
    const prevSlide = () => {
      setStartIndex((prev) => (prev - imagesPerPage < 0 ? 0 : prev - imagesPerPage));
    };
  
    const nextSlide = () => {
      setStartIndex((prev) =>
        prev + imagesPerPage >= images.length ? prev : prev + imagesPerPage
      );
    };
  
    return (
      <div className="gallery">
        <h3>Nos Galeries</h3>
        <div className="gallery-wrapper">
          <button className="arrow left" onClick={prevSlide} disabled={startIndex === 0}>
            ❮
          </button>
          <div className="gallery-container">
            {images.slice(startIndex, startIndex + imagesPerPage).map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Galerie ${index}`} />
              </div>
            ))}
          </div>
          <button className="arrow right" onClick={nextSlide} disabled={startIndex + imagesPerPage >= images.length}>
            ❯
          </button>
        </div>
      </div>
    );
  }