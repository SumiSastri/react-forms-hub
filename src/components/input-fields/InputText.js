import React from 'react';
import './input.css';


const InputText = ({ inputText, updateFormInputs, handleInputSubmit }) => {
  return (
    <div>
      <label>Text:</label>
      <input
        className='input-field-four'
        data-testid='inpt-txt-4'
        placeholder='input-text'
        name='inpt-txt'
        onChange={updateFormInputs}
        onSubmit={handleInputSubmit}
        type='text'
        value={inputText}

      />
    </div>
  );
};
export default InputText;
