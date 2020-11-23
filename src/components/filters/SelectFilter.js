import React from 'react';
import './filter.css';

const SelectFilter = properties => {
  return (
    <div>
      <div className='select-filter-container'>
        <label className='label'>Select Filter</label>
        <select className='select-filter'>
         <option>Select An Option</option>
          <option className="option1">Option 1</option>
          <option className="option2">Option 2</option>
          <option className="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
};
export default SelectFilter;



