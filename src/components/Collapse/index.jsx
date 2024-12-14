import React, { useState } from 'react';
import './collapse.scss';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={toggleCollapse}>
        {title}
        <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
      </button>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  );
}

export default Collapse;