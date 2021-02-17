import React from 'react';

import './formik-css/formikStyles.css';
import FormikHookYup from './formik-forms/FormikHookYup';
import FormikComponentForm from './formik-forms/FormikComponentForm';
import FormikComponentAdvanced1 from './formik-forms/FormikComponentAdvanced1';

function FormikFormsIndex() {
	return (
		<div className="formik-index-page">
			<FormikHookYup />
			<FormikComponentForm />
			<FormikComponentAdvanced1 />
		</div>
	);
}

export default FormikFormsIndex;
