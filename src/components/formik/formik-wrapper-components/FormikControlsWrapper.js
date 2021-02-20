import React from 'react';
// inputs
import FormikInput from '../formik-input-fields/FormikInput';
import FormikTextArea from '../formik-input-fields/FormikTextArea';
// button-groups
import FormikRadioButtons from '../formik-button-groups/FormikRadioButtons';
import FormikCheckBox from '../formik-button-groups/FormikCheckBox';
// filters
import FormikSelectFilter from '../formik-filters/FormikSelectFilter';
import FormikDatePicker from '../formik-filters/FormikDatePicker';

function FormikControlsWrapper(props) {
	const { control, ...rest } = props;
	switch (control) {
		case 'input':
			return <FormikInput {...rest} />;
		case 'textarea':
			return <FormikTextArea {...rest} />;
		case 'select':
			return <FormikSelectFilter {...rest} />;
		case 'radio':
			return <FormikRadioButtons {...rest} />;
		case 'checkbox':
			return <FormikCheckBox {...rest} />;
		case 'date':
			return <FormikDatePicker {...rest} />;

		default:
			return null;
	}
}

export default FormikControlsWrapper;
