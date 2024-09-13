import React from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import Carousel from '../../components/Carousel';
import rentList from '../../datas/logements.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

function Accommodation() {
  const params = useParams();
  const rent = rentList.find((rent) => rent.id === params.id);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="star filled">
            <FontAwesomeIcon icon={faStar} style={{ color: '#ff6060' }} />
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star">
            <FontAwesomeIcon icon={faStar} style={{ color: '#d4d4d4' }} />
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="accommodation">
      <Carousel rent={rent} />
      <div className="accommodationInformation">
        <div className="location">
          <h2>{rent.title}</h2>
          <p>{rent.location}</p>
          <div className="tags">
            {rent.tags.map((tag, index) => (
              <div className="tag" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="hostAndRating">
          <div className="host">
            <span>{rent.host.name}</span>
            <img src={rent.host.picture} alt={rent.host.name} />
          </div>
          <div className="rating">{renderStars(rent.rating)}</div>
        </div>
      </div>
      <div className="descriptionAndEquipments">
        <Collapse rent={rent} title="Description">
          {rent.description}
        </Collapse>
        <Collapse rent={rent} title="Equipements">
          <ul>
            {rent.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Accommodation;
