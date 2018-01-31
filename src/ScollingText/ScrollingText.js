import React from 'react';
import './ScrollingText.css';

const ScrollingText = ({filmData}) => {
  console.log(filmData)
  return (
    <section className='scrolling-text'>
      <div className='crawl'>
        <h1>{filmData[0].title}</h1>
        <p>{filmData[0].description}</p>
      </div>
    </section>
  )
}

export default ScrollingText;