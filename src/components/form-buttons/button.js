import React from 'react';
import './button.css';

const Button = (properties) => {
  return (
    <form name='button-types'>
      <div className="buttons-container">
        <button name='button-one' type='click' className='button-type-one'>
          Button-One
        </button>
        <button name='button-two' type='submit' className='button-type-two'>
          Button-Two
        </button>
      </div>
    </form>
  );
};

export default Button;
