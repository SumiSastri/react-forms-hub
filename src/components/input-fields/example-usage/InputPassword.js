import React from 'react';
import '../styles/inputStyles.css';

import {InputField} from '../InputField'

const InputPassword = ({ value, onChange, onSubmit }) => {
  return (
    <div>
      <label>Password Field</label>
      <InputField
        className='inpt-3s'
        datatestid='password'
        name='password'
        onChange={onChange}
        onSubmit={onSubmit}
        placeholder='use symbols, numbers, letters'
        required={true}
        type='password'
        value={value}
      />
    </div>

  );
};
export default InputPassword;


