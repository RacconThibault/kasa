import React, { useState } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapseWrapper">
      <div className="collapseContainer">
        <h2>{title}</h2>
        <button onClick={toggleCollapse}>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={isOpen ? 'chevronIcon rotate' : 'chevronIcon'}
          />
        </button>
      </div>
      <div className={`openCollapse ${isOpen && 'open'}`}>
        <div className="collpaseChildren">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
