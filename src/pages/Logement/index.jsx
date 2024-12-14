import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../Error';
import Carousel from '../../components/Carousel'; // Import du composant Carousel
import Collapse from '../../components/Collapse'; // Import du composant Collapse
import './logement.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Logement({ data }) {
  const { id } = useParams();

  // Déclare tous les hooks d'état
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Recherche de la location
  const location = data.find(location => location.id === id);

  // Si `location` est null ou undefined, affiche la page d'erreur
  if (!location) {
    return <Error />;
  }

  return (
    <div className="logement">
      {/* Carrousel d'images avec le composant Carousel */}
      <Carousel
        pictures={location.pictures}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />

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
            <img
              src={location.host.picture}
              alt={location.host.name}
              className="logement__host-picture"
            />
          </div>
          <div className="logement__rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`logement__star ${index < location.rating ? 'filled' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Description et équipements avec le composant Collapse */}
      <div className="logement__additional-info">
        {/* Section Description */}
        <Collapse title="Description">
          <p className="logement__description">{location.description}</p>
        </Collapse>

        {/* Section Équipements */}
        <Collapse title="Équipements">
          <ul className="logement__equipments">
            {location.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;