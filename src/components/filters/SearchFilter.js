import React from 'react';

import '../styles/inputStyles.css';
import '../buttons/buttonStyles.css'
import '../styles/filterStyles.css'

import {InputField} from '../input-fields/InputField'

// props here defined as search filter in different parts of an application may require different props
const SearchFilter = ({className, datatestid, icon, label, name, onChange, onSubmit, placeholder, required, type, value }) => {
    return (
        <div >
            <section className='filters-container'>             
           <InputField
                 className={className}
                 datatestid= {datatestid}
                 icon={icon}
                 label={label}
                 name={name}
                 onChange={onChange}
                 onSubmit={onSubmit}
                 placeholder={placeholder}
                 required={required}
                 type={type} 
                 value={value}             
                />
                </section>
        </div>
    );
};
export default SearchFilter;
