import React from 'react';
import './input.css';

const Input = (properties) => {
	return (
        <form name="input-fields">
        <div>
            <label>Input-Field-One</label>
            <input
                name="input-field-one"
                type="text"
                placeholder="input-field-one"
                className="input-field-one"
            />
        </div>
        <br></br>
        </form>
	);
};
export default Input;