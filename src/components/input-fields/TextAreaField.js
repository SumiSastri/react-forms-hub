import React from 'react';
import PropTypes from 'prop-types';

import '../styles/inputStyles.css';

// destructuring the props object - same as const {className, dataTestId} = this.props
export const TextAreaField = ({
	className,
	datatestid,
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
			<textarea
				className={className}
				datatestid={datatestid}
				name={name}
				onChange={onChange}
				onSubmit={onSubmit}
				placeholder={placeholder}
				required={required}
				type="text"
				label={label}
				value={value}
			/>
		</div>
	);
};
