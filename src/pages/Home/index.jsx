import React, { useContext } from 'react';
import BannerTitle from '../../components/BannerTitle';
import Card from '../../components/Card';
import { DataContext } from '../../Provider/DataContext';

import './style.scss';
import backgroundImage from '../../assets/backGroundSea.png';

function Home() {
  const { housing, loading } = useContext(DataContext); // Récupération des données via le contexte

  if (loading) {
    return <p>Chargement des logements...</p>; // Affichage pendant le chargement
  }
  return (
    <div className="homeContainer">
      <BannerTitle
        title="Chez vous, partout et ailleurs"
        bannerImage={backgroundImage}
        alt="Photo d'une falaise marine"
      />
      <div className="cardContainer">
        {housing.map((rent) => (
          <Card key={rent.id} rent={rent} />
        ))}
      </div>
    </div>
  );
}

export default Home;
