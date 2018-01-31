import React from 'react';
import './Controls.css';

const Controls = ({getButtonClass}) => {
  return (
    <div>
      <button className='people' onClick={(e) => getButtonClass(e.target.className, e.target)}>people</button>
      <button className='planets' onClick={(e) => getButtonClass(e.target.className, e.target)}>planets</button>
      <button className='vehicles' onClick={(e) => getButtonClass(e.target.className, e.target)}>vehicles</button>
      <button className='favorite' onClick={(e) => getButtonClass(e.target.className, e.target)}>favorites</button>
    </div>
  )
}

export default Controls;