import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormikControlsWrapper from '../formik-wrapper-components/FormikControlsWrapper';
// REFACTOR ADDS button groups (check validation for checkbuttons )
// https://stackoverflow.com/questions/49886881/validation-using-yup-to-check-string-or-number-length
import { mockAudioFormats, mockMusicGenres, mockUserTypes } from '../../data/mock-data/formikData';

export const FormikWrapper2 = () => {
	const initialValues = {
		email: '',
		comments: '',
		userType: '',
		musicFormat: '',
		musicGenre: ''
	};

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email format').required('Required'),
		comments: Yup.string().required('Required'),
		userType: Yup.string().required('Required'),
		musicFormat: Yup.string().required('Required'),
		musicGenre: Yup.array().required('Required')
	});

	// const onSubmit = (values, submitProps) => {
	// 	console.log('SUBMITTED ', values);
	// 	// console.log('submitProps', submitProps)
	// 	submitProps.setSubmitting(false);
	// 	submitProps.resetForm();
	// };
	const onSubmit = (values) => {
		console.log('SUBMITTED WRAPPER DATA', values);
		// console.log('Saved data', JSON.parse(JSON.stringify(values)));
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{/* render props using formik as props and the HoC Form */}
			{(formik) => (
				<Form>
					<FormikControlsWrapper
						className="inpt-box"
						control="input"
						type="email"
						id="wrapper-email"
						label="Email"
						name="email"
						placeholder="Format - email@address.com"
					/>
					<FormikControlsWrapper
						className="text-box"
						control="textarea"
						type="comments"
						id="wrapper-comments"
						label="Comments"
						name="comments"
						placeholder="We welcome your feedback - type comments here"
					/>
					{/* Name matches name in initial values - 
					Note: The data is an array but the individual drop down is a string value */}
					<FormikControlsWrapper
						className="select"
						control="select"
						label="Select user type"
						name="userType"
						data={mockUserTypes}
					/>
					<FormikControlsWrapper
						control="radio"
						label="Audio Format"
						name="musicFormat"
						data={mockAudioFormats}
					/>
					<FormikControlsWrapper
						control="checkbox"
						label="Music Genre"
						name="musicGenre"
						data={mockMusicGenres}
					/>
					<button className="btn-5" type="submit">
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default FormikWrapper2;
