import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({name, description, type, number, favoriteCard, residents, dataObj}) => {
  return (
    <article className='card'>
      <button 
        className='favorite-button'
        onClick={(e) => favoriteCard(e.target.parentElement, dataObj)}>
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
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  residents: PropTypes.string.isRequired,
  dataObj: PropTypes.object.isRequired,
  favoriteCard: PropTypes.func.isRequired
};