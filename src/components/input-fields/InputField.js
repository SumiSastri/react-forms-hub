import React from 'react';
import PropTypes from 'prop-types';

import '../styles/inputStyles.css';

  // destructuring the props object - same as const {className, dataTestId} = this.props
export const InputField = ({className, datatestid, label, name, onChange, onSubmit, placeholder, required, type, value}) => { 
    return (
        <div >
            <label>{label}</label>
            <input
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


InputField.propTypes = {
    className: PropTypes.string,
    datatestid: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    required: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string
}

       