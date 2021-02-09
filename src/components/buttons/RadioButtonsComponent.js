import React from 'react';
import './button.css';

const RadioButtons = (properties) => {
  return (
    <form name='button-types-radio'>
      <div className='control'>
        <label className='radio-label'>Radio-Button-Set</label>
        <label className='radio-one'>
          <input type='radio' value='radio-one-1' />
        </label>
        <label className='radio-one'>
          <input type='radio' value='radio-one-2' />
        </label>
        <label className='radio-one'>
          <input type='radio' value='radio-one-3' />
        </label>
        <label className='radio-one'>
          <input type='radio' value='radio-one-4' />
        </label>
        <label className='radio-one'>
          <input type='radio' value='radio-one-5' />
        </label>
      </div>
      <br />
    </form>
  );
};
export default RadioButtons;
