import React from 'react';
import { Field, ErrorMessage } from 'formik';

import FormikErrors from '../formik-errors/FormikErrors';

function FormikTextarea(props) {
	const { label, name, ...rest } = props;
	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<Field as="textarea" id={name} name={name} {...rest} />
			<ErrorMessage component={FormikErrors} name={name} />
		</div>
	);
}

export default FormikTextarea;
