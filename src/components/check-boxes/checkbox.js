import React from 'react';
import './checkbox.css';

const Checkbox = properties => {
  return (
    <form className='check-box-container'>
      <div className='check-box-container'>
        <label className='label'>Check-Box</label>
        <input type='checkbox' />
      </div>
    </form>
  );
};
export default Checkbox;
