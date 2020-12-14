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


export const SelectFilter = ({className, datatestid, label, name, onChange, onSubmit, placeholder, required, type, value}) => {
  const selectOptions = (options) => {
    return options.map((option) => {
        return { label:(`filterOptions:${option.labelKey}`), value: option.value };
    });
  }
  return (
    <div >
            <label>{label}</label>
            <option
                className={className}
                datatestid={datatestid}
                name={name}
                onChange={onChange}
                onSubmit={onSubmit} 
                placeholder={placeholder}
                required={required}
                type={type}
                value={value}              
            />
        </div>
  );
};
export default SelectFilter;

