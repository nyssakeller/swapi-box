import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';


const CardContainer = ({data}) => {
  console.log(data)
  let renderedCards = data.map(set => 
    <Card name={set.name}
          description={set.description}
          type={set.type}
          numer={set.number} />
  )

  return(
    <section className='cards'>
      {renderedCards}
    </section>
  )
}

export default CardContainer;