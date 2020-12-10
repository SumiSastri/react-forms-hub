import React from 'react';
import '../styles/inputStyles.css';


const InputText = ({ inputText, updateFormInputs, handleInputSubmit }) => {
  return (
    <div>
      <label>Text:</label>
      <input
        className='inpt-1s'
        data-testid=''
        placeholder=''
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
