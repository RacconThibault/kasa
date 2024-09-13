import React from 'react';
import BannerTitle from '../../components/BannerTitle';
import Card from '../../components/Card';
import rentList from '../../datas/logements.json';
import './style.scss';
import backgroundImage from '../../assets/backGroundSea.png';

function Home() {
  return (
    <div className="homeContainer">
      <BannerTitle
        title="Chez vous, partout et ailleurs"
        bannerImage={backgroundImage}
        alt="Photo d'une falaise marine"
      />
      <div className="homeContainer__cardContainer">
        {rentList.map((rent) => (
          <Card key={rent.id} rent={rent} />
        ))}
      </div>
    </div>
  );
}

export default Home;
