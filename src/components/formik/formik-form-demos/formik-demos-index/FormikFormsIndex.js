import React from 'react';

import '../../formik-css/formikStyles.css';
import FormikHookYup from '../FormikHookYup';
// import FormikComponentAdvanced3 from '../FormikComponentAdvanced3';
import FormikWrapper1 from '../FormikWrapper1';

function FormikFormsIndex() {
	return (
		<div className="formik-index-page">
			<FormikHookYup />
			<FormikWrapper1 />
			{/* <FormikComponentAdvanced3 /> */}
		</div>
	);
}

export default FormikFormsIndex;
