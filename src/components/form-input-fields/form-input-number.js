import React from 'react';
import './input.css';

const InputNumber = properties => {
  return (
    <form name='input-fields'>
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
    </form>
  );
};
export default InputNumber;
