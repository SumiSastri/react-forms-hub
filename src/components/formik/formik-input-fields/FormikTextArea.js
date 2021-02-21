import React from 'react';
import { Field, ErrorMessage } from 'formik';

import FormikErrors from '../formik-errors/FormikErrors';

function FormikTextarea(props) {
	const { id, label, name, ...rest } = props;
	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			{/* the Formik HoC is the JSX tag instead of type you use as*/}
			<Field as="textarea" id={id} name={name} {...rest} />
			{/* this is another reusable component */}
			<ErrorMessage component={FormikErrors} name={name} />
		</div>
	);
}

export default FormikTextarea;
