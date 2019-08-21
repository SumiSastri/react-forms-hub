import React from 'react';
import './input.css';
import FormHeader from '../form-navbars/formHeader';
import FormFooter from '../form-navbars/formFooter';

const Input = properties => {
  return (
    <form name='input-fields'>
      <FormHeader />
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
      <br />
      <div>
        <label>Password Field</label>
        <input
          name='password-field-1'
          type='password'
          placeholder='6/8 characters'
          className='password-field-1'
        />
      </div>
      <br />
      <div>
        <label>Password Field</label>
        <input
          name='password-field-2'
          type='password'
          placeholder='6-12 characters'
          className='password-field-2'
        />
      </div>
      <br />
      <div>
        <label>Numbers-Field (Rectangle)</label>
        <input
          name='Input-Numbers-1'
          type='number'
          placeholder=''
          className='numbers-1'
        />
      </div>
      <div>
        <label>Numbers-Field (Pill)</label>
        <input
          name='Input-Numbers-2'
          type='number'
          placeholder=''
          className='numbers-2'
        />
      </div>
      <FormFooter />
    </form>
  );
};
export default Input;
