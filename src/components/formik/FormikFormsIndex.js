import React from 'react';

import './formik-css/formikStyles.css';
import FormikBasicsYup from './formik-forms/FormikBasicsYup';
import FormikBasicContextForm from './formik-forms/FormikBasicContextForm';

function FormikFormsIndex() {
	return (
		<div className="formik-index-page">
			<FormikBasicsYup />
			<FormikBasicContextForm />
		</div>
	);
}

export default FormikFormsIndex;
