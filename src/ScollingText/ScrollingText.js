/* eslint-disable */
import React from 'react';
import './ScrollingText.css';
import PropTypes from 'prop-types';

const ScrollingText = ({filmData}) => {
  const index = Math.floor((Math.random() * 6) + 1);

  return (
    <section className='scrolling-text'>
      <h1>{filmData[index].title}</h1>
      <p>{filmData[index].description}</p>
    </section>
  );
};

export default ScrollingText;

ScrollingText.propTypes = {
  filmData: PropTypes.object.isRequired
};