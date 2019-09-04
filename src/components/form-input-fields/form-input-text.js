import React from 'react';
import './input.css';

const InputText = properties => {
  return (
    <form name='input-fields'>
      <div>
        <label>Text-Input-One</label>
        <input
          name='input-field-one'
          type='text'
          placeholder='full-screen-field'
          className='input-field-one'
        />
      </div>
      <br />
      <div>
        <label>Text-Input-Two</label>
        <input
          name='input-field-two'
          type='text'
          placeholder='field-with-colored-background'
          className='input-field-two'
        />
      </div>
      <br />
      <div>
        <label>Text-Input-Three</label>
        <input
          name=''
          type='text'
          placeholder='half-screen-width'
          className='input-field-three'
        />
      </div>
      <br />
      <div>
        <label>Text-Input-Four</label>
        <input
          name='input-field-four'
          type='text'
          placeholder='quarter-screen'
          className='input-field-four'
        />
      </div>
    </form>
  );
};
export default InputText;
