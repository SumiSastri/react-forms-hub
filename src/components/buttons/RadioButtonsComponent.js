import React from 'react';

import { FormInputComponent } from '../input-fields/FormInputComponent';
import '../styles/buttonStyles.css';

export const RadioButtonsComponent = ({
	disabled,
	defaultValue,
	datatestid,
	label,
	data,
	options,
	name,
	onClick,
	onSubmit,
	onChange
}) => {
	return (
		<div>
			<p>{label}</p>
			<FormInputComponent
				name={name}
				type="radio"
				className="radio-1"
				data={data}
				options={options}
				disabled={disabled}
				defaultValue={defaultValue}
				datatestid={datatestid}
				onChange={onChange}
				onClick={onClick}
				onSubmit={onSubmit}
			>
				{data.map((options) => (
					<label htmlFor={options.value}>
						<input id={options.id} value={options.value}>
							{options.label}
						</input>
						{options.label}
					</label>
				))}
			</FormInputComponent>
		</div>
	);
};
export default RadioButtonsComponent;
