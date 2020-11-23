import React from 'react';
import './input.css';

const InputPassword = ({ inputPassword, handleInputSubmit, updateFormInputs }) => {
  return (
    <div>
      <label>Password Field</label>
      <input
        className='password-field-2'
        data-testid='passwrd-inpt-2'
        name='password-field-2'
        onChange={updateFormInputs}
        onSubmit={handleInputSubmit}
        placeholder='6-12 characters'
        required={true}
        type='password'
        value={inputPassword}
      />
    </div>

  );
};
export default InputPassword;
