import React from 'react';
import './Card.css'

const Card = ({name, description, type, number}) => {
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{type}</p>
      <p>{number}</p>
    </article>
  )
}

export default Card;