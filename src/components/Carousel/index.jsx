import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Carousel({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="logement__carousel">
      <img
        src={pictures[currentImageIndex]}
        alt={`Carousel ${currentImageIndex + 1}`}
        className="logement__carousel-image"
      />
      <button onClick={prevImage} className="logement__carousel-arrow left">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button onClick={nextImage} className="logement__carousel-arrow right">
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className="logement__carousel-counter">
        {currentImageIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}

export default Carousel;