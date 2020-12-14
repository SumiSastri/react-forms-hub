import React from 'react';
import '../styles/filterStyles.css';


export const SelectFilter = ({className, datatestid, label, name, onChange, options, onSubmit, placeholder, required, type, value}) => {
  return (
    <div >
            <label>{label}</label>
            <option
                className={className}
                datatestid={datatestid}
                name={name}
                onChange={onChange}
                options={options}
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


// <SelectFilter onChange={event => this.updateSearchInputs('selectFilterOption', event.target.value)} /> 
// options={ this.selectOptions(ddlOptions.ddlOptionsName.options) }
// value={ this.state.ddlOptionsName }

// const selectOptions = (options) => {
//   return options.map((option) => {
//       return { label:(`filterOptions:${option.labelKey}`), value: option.value };
//   });
// }


