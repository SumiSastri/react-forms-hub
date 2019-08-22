import React from 'react';
import './button.css';

const Button = properties => {
  return (
    <form name='button-types'>
      <div>
        <h3>Animated Buttons</h3>
      </div>
      <div className='buttons-container'>
        <button name='button-one' type='click' className='button-one'>
          Button-One
        </button>
        <button name='button-two' className='button-two'>
          <span>Button-Two</span>
        </button>
        <button name='button-three' className='button-three'>
          Button-Three
        </button>
        <button name='button-two' className='button-four'>
          Button-Four-Disabled
        </button>
      </div>
    </form>
  );
};

export default Button;
