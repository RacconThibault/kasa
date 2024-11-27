import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Card({ rent }) {
  return (
    <Link to={`/accommodation/${rent.id}`} className="card" key={rent.id}>
      <div className="cardContaint">
        <img src={rent.cover} alt={rent.title} />
        <h3>{rent.title}</h3>
      </div>
    </Link>
  );
}

export default Card;
