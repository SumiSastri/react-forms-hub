import React from 'react';
import './filter.css';

const SelectFilter = properties => {
  return (
    <div>
      <div className='select-filter-container'>
        <label className='label'>Select Filter</label>
        <select name='select-filter'>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </div>
  );
};
export default SelectFilter;
