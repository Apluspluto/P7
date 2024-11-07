import React from 'react';
import '../../styles/components/location.scss';
import { Link } from 'react-router-dom';

function Location({ id, title, cover, location }) {
  return (
    <Link key={id} to={`/Logement/${id}`} className="location-link">
      <div className="location-card">
        <img src={cover} alt={title} className="location-image" />
        <div className="text-overlay">
          <h1 className="location-title">{title}</h1>
          <p className="location-description">{location}</p>
        </div>
      </div>
    </Link>
  );
}

export default Location;