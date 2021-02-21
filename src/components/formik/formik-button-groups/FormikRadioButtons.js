import React from 'react';
import { Field, ErrorMessage } from 'formik';

import FormikErrors from '../formik-errors/FormikErrors';

function FormikRadioButtons(props) {
	const { id, label, name, data, ...rest } = props;
	return (
		<div className="form-control">
			<label>{label}</label>
			<Field name={name}>
				{/* render props method with field as a prop this is a JSX input tag */}
				{({ field }) => {
					// console.log(field, 'props in radio button Field HoC');
					return data.map((options) => {
						// console.log(data, 'check RADIO-BTN data');
						return (
							// Fragments allow you to map through multiple JSX tags
							// - here the input and the label or you can use a div
							<React.Fragment key={options.id}>
								<div className="btn-grp-divs">
									<input
										className="radio-1"
										type="radio"
										key={options.value}
										// field prop gives you the functionality of Formik on blur/touched methods
										{...field}
										{...rest}
										value={options.value}
										// checked is a prop is the input button equal to value on click
										checked={field.value === options.value}
									/>
									<label htmlFor={options.value}>{options.key}</label>
								</div>
							</React.Fragment>
						);
					});
				}}
			</Field>
			<ErrorMessage component={FormikErrors} name={name} />
		</div>
	);
}

export default FormikRadioButtons;
