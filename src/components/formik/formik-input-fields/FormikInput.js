import React from 'react';
import { Field, ErrorMessage } from 'formik';

import FormikErrors from '../formik-errors/FormikErrors';

function FormikInput(props) {
	// destructure props to be used - the other props is for the Field
	const { id, label, name, ...rest } = props;
	// console.log(props);
	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<Field id={id} name={name} {...rest} />
			<ErrorMessage component={FormikErrors} name={name} />
		</div>
	);
}

export default FormikInput;
