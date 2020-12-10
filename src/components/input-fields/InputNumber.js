import React from 'react';
import '../styles/inputStyles.css';

const InputNumber = ({ inputNumber, updateFormInputs, handleInputSubmit }) => {
  return (
    <div>
      <label>Number:</label>
      <input
        className='inpt-2s'
        data-testid=''
        name='num-inpt'
        onChange={updateFormInputs}
        onSubmit={handleInputSubmit}
        placeholder='0'
        required={false}
        type='number'
        value={inputNumber}
      />
    </div>
  );
};
export default InputNumber;



