import React from 'react';
import PropTypes from 'prop-types';
import '../styles/filterStyles.css';

export const SelectFilter = ({className, datatestid, data, defaultValue, label, name, onChange, options, onSubmit, placeholder, required, type, value}) => {
  
  const handleChange = (event) => {
    console.log(event)
    const {value} = event.target;
    onChange(value);
};
  return (
    <div ><span>{label}</span>
            <select
                className={className}
                defaultValue={defaultValue || 'default'}
                datatestid={datatestid}
                name={name}
                onChange={handleChange}
                options={options}
                onSubmit={onSubmit} 
                required={required}
                type={type}
                value={value}              
               >
              <option disabled value={defaultValue}>{placeholder}</option>
             {data.map((item, key) => 
             (<option
                  key={key}
                  value={item.value}>
                  {item.label}
              </option>)
            )}
            </select>
        </div>
  )
};

SelectFilter.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  datatestid: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder:PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
}

SelectFilter.defaultProps = {
  value: '',
  placeholder: ''
};

export default SelectFilter;




   