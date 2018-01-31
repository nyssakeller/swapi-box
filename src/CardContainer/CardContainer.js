import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';


const CardContainer = ({data, favoriteCard}) => {
  let renderedCards = data.map((set, key) => 
    <Card name={set.name}
          description={set.description}
          type={set.type}
          numer={set.number}
          favoriteCard={favoriteCard}
          id={set.name}
          key={key} />
  )

  return(
    <section className='cards'>
      {renderedCards}
    </section>
  )
}

export default CardContainer;