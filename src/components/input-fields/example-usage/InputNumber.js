import React from 'react';
import '../styles/inputStyles.css';

import {InputField} from '../InputField'

const InputNumber = ({ value, onChange, onSubmit }) => {
  return (
    <div>
      <label>Number:</label>
      <InputField
        className='inpt-2s'
        datatestid='inpt-num'
        name='inpt-num'
        onChange={onChange}
        onSubmit={onSubmit}
        placeholder='0'
        required={false}
        type='number'
        value={value}
      />
    </div>
  );
};
export default InputNumber;



