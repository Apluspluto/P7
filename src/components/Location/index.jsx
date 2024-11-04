import React from 'react';
import data from '../../data/data.json'; 
import '../../styles/components/location.scss'

function Location() { 
  return (
    <div className='container_location'>
      {data.map(location => (
        <div key={location.id}>
          <img src={location.cover} alt={location.title} />
          <p>{location.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Location