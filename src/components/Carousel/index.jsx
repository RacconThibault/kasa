import React, { useState } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ rent }) => {
  const [index, setIndex] = useState(0);
  const length = rent.pictures.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      <img src={rent.pictures[index]} alt={rent.title} />
      <div className="controls">
        <button onClick={handlePrevious}>
          <FontAwesomeIcon
            icon={faChevronUp}
            rotation={270}
            style={{ color: '#ffffff' }}
          />
        </button>
        <button onClick={handleNext}>
          <FontAwesomeIcon
            icon={faChevronUp}
            rotation={90}
            style={{ color: '#ffffff' }}
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
