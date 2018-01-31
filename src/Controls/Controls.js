import React from 'react';
import './Controls.css';

const Controls = ({getButtonClass}) => {
  return (
    <div>
      <button className='people' onClick={(e) => getButtonClass(e.target.className)}>people</button>
      <button className='planets' onClick={(e) => getButtonClass(e.target.className)}>planets</button>
      <button className='vehicles' onClick={(e) => getButtonClass(e.target.className)}>vehicles</button>
      <button className='favorite'>favorites</button>
    </div>
  )
}

export default Controls;