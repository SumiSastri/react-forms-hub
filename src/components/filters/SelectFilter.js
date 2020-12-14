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

// options={ this.selectOptions(selectFilterOptions.userType.options) }
// value={ this.state.selectFilterOption }

// const selectOptions = (options) => {
//   return options.map((option) => {
//       return { label:(`filterOptions:${option.labelKey}`), value: option.value };
//   });
// }

// userType: {
//   type: 'select',
//   options: [
//       { labelKey: 'musician', value: 'musician' },
//       { labelKey: 'musicBuyer', value: 'musicBuyer' },
//       { labelKey: 'musicAgent', value: 'musicAgent' },
//   ],
// },


