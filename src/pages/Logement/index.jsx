import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../Error';
import '../../styles/pages/logement.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Logement({ data }) {
  const { id } = useParams();

  // Déclare tous les hooks d'état en premier
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Recherche de la location
  const location = data.find(location => location.id === id);

  // Si `location` est null ou undefined, affiche la page d'erreur
  if (!location) {
    return <Error />;
  }

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % location.pictures.length);
  };

  // Fonction pour revenir à l'image précédente
  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + location.pictures.length) % location.pictures.length
    );
  };

  return (
    <div className="logement">
      {/* Carrousel d'images */}
      <div className="logement__carousel">
      <img  src={location.pictures[currentImageIndex]} alt={`${location.title} - ${currentImageIndex + 1}`} className="logement__carousel-image" />
        <button onClick={prevImage} className="logement__carousel-arrow left">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={nextImage} className="logement__carousel-arrow right">
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className="logement__carousel-counter">
          {currentImageIndex + 1} / {location.pictures.length}
        </div>
      </div>

      {/* Informations principales */}
      <div className="logement__details">
        <div className="logement__info">
          <h1 className="logement__title">{location.title}</h1>
          <p className="logement__location">{location.location}</p>
          <div className="logement__tags">
            {location.tags.map((tag, index) => (
              <span key={index} className="logement__tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="logement__host-rating">
          <div className="logement__host">
            <p className="logement__host-name">{location.host.name}</p>
            <img src={location.host.picture} alt={location.host.name} className="logement__host-picture" />
          </div>
          <div className="logement__rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className={`logement__star ${index < location.rating ? 'filled' : ''}`}>★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Description et équipements */}
      <div className="logement__additional-info">
        {/* Section Description */}
        <div className="logement__section">
          <button 
            className="logement__button" 
            onClick={() => setDescriptionOpen(!isDescriptionOpen)}
          >
            Description
            <i className={`fas ${isDescriptionOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </button>
          {isDescriptionOpen && (
            <p className="logement__description">{location.description}</p>
          )}
        </div>

        {/* Section Équipements */}
        <div className="logement__section">
          <button 
            className="logement__button" 
            onClick={() => setEquipmentsOpen(!isEquipmentsOpen)}
          >
            Équipements
            <i className={`fas ${isEquipmentsOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </button>
          {isEquipmentsOpen && (
            <ul className="logement__equipments">
              {location.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Logement;