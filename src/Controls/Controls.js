import React from 'react';
import './Controls.css';
import PropTypes from 'prop-types';

const Controls = ({getButtonClass, favorites}) => {
  return (
    <div>
      <button 
        className='people' 
        onClick={(e) => getButtonClass(e.target.className, e.target)}>
          people
      </button>

      <button 
        className='planets' 
        onClick={(e) => getButtonClass(e.target.className, e.target)}>
          planets
      </button>

      <button 
        className='vehicles' 
        onClick={(e) => getButtonClass(e.target.className, e.target)}>
          vehicles
      </button>

      <button 
        className='favorites' 
        onClick={(e) => getButtonClass(e.target.className, e.target)}>
          favorites: {favorites.length}
      </button>
    </div>
  );
};

export default Controls;

Controls.propTypes = {
  getButtonClass: PropTypes.func,
  favorites: PropTypes.array.isRequired
};