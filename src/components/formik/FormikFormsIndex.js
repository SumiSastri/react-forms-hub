import React from 'react';

import './formik-css/formikStyles.css';
import FormikHookYup from './formik-forms/FormikHookYup';
import FormikComponentForm from './formik-forms/FormikComponentForm';
import FormikComponentAdvanced2 from './formik-forms/FormikComponentAdvanced2';

function FormikFormsIndex() {
	return (
		<div className="formik-index-page">
			<FormikHookYup />
			<FormikComponentForm />
			<FormikComponentAdvanced2 />
		</div>
	);
}

export default FormikFormsIndex;
