import React from 'react';
import '../styles/filterStyles.css';

const SelectFilter = ({ selectFilter, updateFilterInputs }) => {
  return (
    <div>
      <div className='select-filter-container'>
        <label className='label'>Select Filter</label>
        <select className='select-filter' value='' onChange=''>
         <option>Select An Option</option>
          <option className="option1" value=''>Option 1</option>
          <option className="option2" value=''>Option 2</option>
          <option className="option3" value=''>Option 3</option>
        </select>
        <button type='submit' onSubmit={() => { }}>Submit</button>
      </div>
    </div>
  );
};
export default SelectFilter;

transformOptions = (options) => {
  return options.map((option) => {
      return { label: this.props.t(`filterOptions:${option.labelKey}`), value: option.value };
  });
}

