import React from 'react';
import '../../styles/components/location.scss';
import { Link } from 'react-router-dom';

function Location({ data }) {
  return (
    <div className='container_location'>
      {data.map(location => (
        <Link key={location.id} to={`/Logement/${location.id}`}>
          <div>
            <img src={location.cover} alt={location.title} />
            <p>{location.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Location;