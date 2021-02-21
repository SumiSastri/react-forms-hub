import React from 'react';
import PropTypes from 'prop-types';

import '../styles/inputStyles.css';

// destructuring the props object - same as const {className, dataTestId} = props
// see ButtonComponent for 2nd method's syntax
export const FormInputComponent = (props) => {
	const { className, datatestid, id, label, placeholder, required, type, name, value, onChange, onSubmit } = props;
	return (
		<div>
			<label>{label}</label>
			<input
				className={className}
				type={type}
				label={label}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
				datatestid={datatestid}
				id={id}
				required={required}
				onSubmit={onSubmit}
			/>
		</div>
	);
};

// Type checks props using the react library
FormInputComponent.propTypes = {
	className: PropTypes.string,
	datatestid: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	required: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.string
};
