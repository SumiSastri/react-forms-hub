import React from 'react';
import PropTypes from 'prop-types';

import '../styles/inputStyles.css';

// destructuring the props object - same as const {className, dataTestId} = this.props
export const FormInputComponent = ({
	className,
	datatestid,
	id,
	label,
	name,
	onChange,
	onSubmit,
	placeholder,
	required,
	type,
	value
}) => {
	return (
		<div>
			<label>{label}</label>
			<input
				className={className}
				datatestid={datatestid}
				id={id}
				required={required}
				type={type}
				label={label}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
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
