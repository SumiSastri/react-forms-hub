import React from 'react';
import { Field, ErrorMessage } from 'formik';
// react-date-picker library
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import FormikErrors from '../formik-errors/FormikErrors';

function FormikDatePicker(props) {
	const { label, name, ...rest } = props;
	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<Field name={name}>
				{({ form, field }) => {
					const { setFieldValue } = form;
					const { value } = field;
					return (
						<DateView
							id={name}
							{...field}
							{...rest}
							selected={value}
							onChange={(val) => setFieldValue(name, val)}
						/>
					);
				}}
			</Field>
			<ErrorMessage component={FormikErrors} name={name} />
		</div>
	);
}

export default FormikDatePicker;
