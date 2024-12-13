import React from 'react';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Carousel({ pictures, currentImageIndex, setCurrentImageIndex }) {
  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
  };

  // Fonction pour revenir à l'image précédente
  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="logement__carousel">
      <img src={pictures[currentImageIndex]} alt="Carousel" className="logement__carousel-image" />
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

Carousel.propTypes = {
  pictures: PropTypes.array.isRequired,
  currentImageIndex: PropTypes.number.isRequired,
  setCurrentImageIndex: PropTypes.func.isRequired
};

export default Carousel;