import React from 'react';
import PropTypes from 'prop-types';
import '../styles/dropDownListStyles.css';

export const SelectFilterComponent = ({
	className,
	data,
	datatestid,
	id,
	label,
	name,
	onChange,
	options,
	onSubmit,
	required,
	value
}) => {
	return (
		<div>
			<label>
				<p>{label}</p>
				<select
					className={className}
					data={data}
					datatestid={datatestid}
					id={id}
					name={name}
					onChange={onChange}
					options={options}
					onSubmit={onSubmit}
					required={required}
					value={value}
				>
					{data.map((options) => (
						<option key={options.id} value={options.value}>
							{options.label}
						</option>
					))}
				</select>
			</label>

			<br />
		</div>
	);
};

SelectFilterComponent.propTypes = {
	className: PropTypes.string,
	data: PropTypes.array,
	datatestid: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.string
};

SelectFilterComponent.defaultProps = {
	value: '',
	placeholder: ''
};

export default SelectFilterComponent;
