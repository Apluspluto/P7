import React from 'react';
import { useParams } from 'react-router-dom';

function Logement({ data }) {
  const { id } = useParams();
  const location = data.find(location => location.id === id);

  if (!location) {
    return <p>Location non trouvée</p>;
  }

  return (
    <div>
      <h1>{location.title}</h1>
      <img src={location.cover} alt={location.title} />
      <p>{location.description}</p>
      {/* Ce ne sont pas du tout les éléments définitif, c'est pour voir si les éléments s'affiche bien */}
    </div>
  );
}

export default Logement;