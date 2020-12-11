import React from 'react';
import '../styles/inputStyles.css';

import {InputField} from '../InputField'

const InputText = ({ value, onChange, onSubmit  }) => {
  return (
    <div>
      <label>Text:</label>
      <InputField
        className='inpt-1s'
        datatestid='inpt-txt'
        placeholder='type text here'
        name='inpt-txt'
        onChange={onChange}
        onSubmit={onSubmit}
        type='text'
        value={value}
      />
    </div>
  );
};
export default InputText;
