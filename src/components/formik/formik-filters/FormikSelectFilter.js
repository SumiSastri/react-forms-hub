import React from 'react';
import { Field, ErrorMessage } from 'formik';

import FormikErrors from '../formik-errors/FormikErrors';

function FormikSelectFilter(props) {
	const { id, label, name, data, ...rest } = props;
	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			{/* input field as select prop mapping data into the options JSX tag */}
			<Field as="select" id={id} name={name} {...rest}>
				{/* children of the field component */}
				{data.map((options) => {
					// console.log(data, 'check SELECT FILTER data');
					return (
						// data is set up as keys and values
						<option key={options.value} value={options.value}>
							{options.key}
						</option>
					);
				})}
			</Field>
			<ErrorMessage component={FormikErrors} name={name} />
		</div>
	);
}

export default FormikSelectFilter;
