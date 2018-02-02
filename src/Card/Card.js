import React from 'react';
import Controls from '../Controls/Controls.js';
import './Card.css';

const Card = ({name, description, type, number, favoriteCard, id, residents}) => {

  return (
    <article className='card'>
      <button 
        className='favorite-button'
        onClick={(e) => favoriteCard(e.target.parentElement, id)}>
      </button>

      <h2>{name}</h2>
      <p>{description}</p>
      <p>{type}</p>
      <p>{number}</p>
      <p>{residents}</p>
    </article>
  )
}

export default Card;