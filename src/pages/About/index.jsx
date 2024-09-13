import React from 'react';
import BannerTitle from '../../components/BannerTitle';
import Collapse from '../../components/Collapse';
import aboutList from '../../datas/about.json';
import backgroundImage from '../../assets/BackgroundMountain.png';
import './style.scss';

function About() {
  return (
    <div className="aboutWrapper">
      <BannerTitle bannerImage={backgroundImage} alt="Photo d'une montagne" />
      <div className="aboutCategory">
        {aboutList.map((about) => (
          <Collapse key={about.id} title={about.title}>
            {about.content}
          </Collapse>
        ))}
      </div>
    </div>
  );
}

export default About;
