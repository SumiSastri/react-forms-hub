import React from 'react';
import './input.css';

const InputNumber = ({ inputNumber, updateFormInputs, handleInputSubmit }) => {
  return (
    <div>
      <label>Number:</label>
      <input
        className='numbers-1'
        data-testid='num-inpt-1'
        name='num-inpt-1'
        onChange={updateFormInputs}
        onSubmit={handleInputSubmit}
        type='number'
        value={inputNumber}
      />
    </div>
  );
};
export default InputNumber;
