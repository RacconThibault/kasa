import React from 'react';
import './style.scss';
import darklogo from '../../assets/darkLogo.png';

function Footer() {
  return (
    <footer>
      <img src={darklogo} alt="logo du site kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
