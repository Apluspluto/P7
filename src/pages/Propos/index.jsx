import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import fond from '../../assets/images/kalen-emsley.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Propos/propos.scss';
import Background from '../../components/Background';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { title: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { title: 'Respect', content: '  La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Service', content: ' La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.' },
    { title: 'Sécurité', content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique de nos hôtes." }
  ];

  return (
    <div>
      <Background image={fond} className="about-fond" />
      <div className="accordion">
        {sections.map((section, index) => (
          <div key={index} className="accordion-item">
            <button
              className="accordion-title"
              onClick={() => handleToggle(index)}
            >
              {section.title}
              <i className={`fa-solid ${activeIndex === index ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
            </button>
            <Collapse isOpened={activeIndex === index}>
              <div className="accordion-content">
                {section.content}
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;