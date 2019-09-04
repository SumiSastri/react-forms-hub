import React from 'react';
import './input.css';

const InputPassword = properties => {
  return (
    <form name='input-fields'>
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
    </form>
  );
};
export default InputPassword;
