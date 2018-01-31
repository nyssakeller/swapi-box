import React from 'react';
import './Card.css'

const Card = ({name, description, type, number, favoriteCard, id}) => {
  return (
    <article className='card'>
      <button 
        className='favorite-button'
        onClick={(e) => favoriteCard(e.target.parentElement)}>
      </button>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{type}</p>
      <p>{number}</p>
    </article>
  )
}

export default Card;