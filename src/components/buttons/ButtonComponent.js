import React from 'react';
import PropTypes from 'prop-types';

import '../styles/buttonStyles.css';

export const ButtonComponent = ({
	className,
	disabled,
	defaultValue,
	datatestid,
	label,
	name,
	onClick,
	onSubmit,
	required
}) => {
	return (
		<div
			className={className}
			datatestid={datatestid}
			defaultValue={defaultValue}
			disabled={disabled}
			label={label}
			name={name}
			onClick={onClick}
			onSubmit={onSubmit}
			required={required}
		>
			{label}
		</div>
	);
};

ButtonComponent.propTypes = {
	className: PropTypes.string,
	datatestid: PropTypes.string,
	defaultValue: PropTypes.bool,
	disabled: PropTypes.bool,

	label: PropTypes.string,
	name: PropTypes.string,
	openModal: PropTypes.bool,
	onClick: PropTypes.func,
	onSubmit: PropTypes.func,
	required: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.string
};
