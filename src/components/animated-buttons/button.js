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
          Submit
        </button>
        <button name='button-two' className='button-two'>
          <span>Next</span>
        </button>
        <button name='button-three' className='button-three'>
          Upload Docs
        </button>
        <button name='button-two' className='button-four'>
          Disabled
        </button>
      </div>
    </form>
  );
};

export default Button;
