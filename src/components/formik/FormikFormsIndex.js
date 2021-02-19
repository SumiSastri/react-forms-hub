import React from 'react';

import './formik-css/formikStyles.css';
import FormikHookYup from './formik-forms/FormikHookYup';

import FormikComponentAdvanced3 from './formik-forms/FormikComponentAdvanced3';

function FormikFormsIndex() {
	return (
		<div className="formik-index-page">
			<FormikHookYup />

			<FormikComponentAdvanced3 />
		</div>
	);
}

export default FormikFormsIndex;
