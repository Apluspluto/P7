import React, { useState } from 'react';
import fond from '../../assets/images/kalen-emsley.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../styles/pages/propos.scss'; 

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { title: 'Fiabilité', content: 'Détails sur la fiabilité...' },
    { title: 'Respect', content: 'Détails sur le respect...' },
    { title: 'Service', content: 'Détails sur le service...' },
    { title: 'Sécurité', content: 'Détails sur la sécurité...' },
  ];

  return (
    <div>
    <div className='container_fond'><img src={fond} alt='background' className="about-fond"/></div>
    <div className="accordion">
      {sections.map((section, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-title"
            onClick={() => handleToggle(index)}
          >
            {section.title}
            <i className={`fa-solid ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </button>
          {activeIndex === index && (
            <div className="accordion-content">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Accordion;