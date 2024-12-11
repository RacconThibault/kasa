import React from 'react';
import logokasa from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './style.scss';

function Header() {
  return (
    <div className="navWrapper">
      <Link to="/">
        <img src={logokasa} alt="Logo" />
      </Link>
      <div className="linkWrapper">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </div>
    </div>
  );
}

export default Header;
