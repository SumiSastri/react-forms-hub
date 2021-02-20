import React from 'react';
import { Field, ErrorMessage } from 'formik';

import FormikErrors from '../formik-errors/FormikErrors';

function FormikRadioButtons(props) {
	const { label, name, options, ...rest } = props;
	return (
		<div className="form-control">
			<label>{label}</label>
			<Field name={name}>
				{({ field }) => {
					return options.map((option) => {
						return (
							<React.Fragment key={option.key}>
								<input
									type="radio"
									id={option.value}
									{...field}
									{...rest}
									value={option.value}
									checked={field.value === option.value}
								/>
								<label htmlFor={option.value}>{option.key}</label>
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
