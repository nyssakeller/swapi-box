import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';


const CardContainer = ({data, favoriteCard, className}) => {
  let renderedCards = data.map((set, key) => 
    <Card name={set.name}
          description={set.description}
          type={set.type}
          number={set.number}
          residents={set.residents}
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