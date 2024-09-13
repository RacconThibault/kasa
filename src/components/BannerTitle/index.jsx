import React from 'react';
import '../BannerTitle/style.scss';

const BannerTitle = ({ title, bannerImage, alt }) => {
  return (
    <div className="bannerWrapper">
      <div className="titleWrapper">
        <h1>{title}</h1>
      </div>
      <img className="backgroundImage" src={bannerImage} alt={alt} />
    </div>
  );
};

export default BannerTitle;
