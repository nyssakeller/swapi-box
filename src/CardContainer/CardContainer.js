import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({data, favoriteCard}) => {
  let renderedCards = data.map((dataObject, key) => 
    <Card 
      {...dataObject}
      favoriteCard={favoriteCard}
      dataObj={dataObject}
      key={key} />
  );

  return (
    <section className='cards'>
      {renderedCards}
    </section>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  favoriteCard: PropTypes.func,
  dataObj: PropTypes.object,
  key: PropTypes.number,
  data: PropTypes.array
};