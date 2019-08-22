import React from 'react';
import './checkbox.css';

const Checkbox = properties => {
  return (
    <form className='checkbox-container'>
      <div className='checkbox'>
        <input type='checkbox' id='checkbox-1' />
        <label for='checkbox-1'>Check-Box</label>
      </div>
    </form>
  );
};
export default Checkbox;
