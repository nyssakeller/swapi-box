import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';


const Card = ({name, description, type, number, favoriteStatus, favoriteCard, residents, dataObj}) => {
  const toggleClass = favoriteStatus ? 'card favorite' : 'card';

  return (
    <article className={toggleClass}>
      <button 
        className='favorite-button'
        onClick={() => favoriteCard(dataObj)}>
      </button>

      <h2>{name}</h2>
      <p>{description}</p>
      <p>{type}</p>
      <p>{number}</p>
      <p>{residents}</p>
    </article>
  );  
};

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  number: PropTypes.string,
  residents: PropTypes.string,
  dataObj: PropTypes.object,
  favoriteCard: PropTypes.func
};