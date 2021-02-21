import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// REFACTOR ADDS age and date with validation
import FormikControlsWrapper from '../formik-wrapper-components/FormikControlsWrapper';
import { mockAudioFormats, mockMusicGenres, mockUserTypes } from '../../data/mock-data/formikData';

export const FormikWrapper3 = () => {
	const initialValues = {
		age: '',
		comments: '',
		doB: null,
		email: '',
		musicFormat: '',
		musicGenre: [],
		pass: '',
		passConfirm: '',
		userType: ''
	};

	const validationSchema = Yup.object({
		age: Yup.number()
			.typeError('Must be a number')
			.positive()
			.integer()
			.moreThan(17)
			.required('Required must be a number'),
		comments: Yup.string().required('Required'),
		doB: Yup.date().required('Click input field for date picker').nullable(),
		email: Yup.string().email('Invalid email format').required('Required'),
		musicFormat: Yup.string().required('Required'),
		musicGenre: Yup.array().min(1, 'At least one box must be ticked').required('Required'),
		pass: Yup.string().min(3, 'Minimum 3 characters').required('Required'),
		passConfirm: Yup.string().oneOf([ Yup.ref('pass') ], "Password's do not match").required('Required'),
		userType: Yup.string().required('Required')
	});

	const onSubmit = (values, submitProps) => {
		console.log('SUBMITTED WRAPPER DATA', values);
		// console.log('Saved data', JSON.parse(JSON.stringify(values)));
		submitProps.setSubmitting(false);
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
						className="inpt-box"
						control="input"
						type="password"
						id="wrapper-pass"
						label="Password"
						name="pass"
						placeholder="Minimum 3 characters"
					/>

					<FormikControlsWrapper
						className="inpt-box"
						control="input"
						type="password"
						id="wrapper-passConfirm"
						name="passConfirm"
						placeholder="Passwords must match"
					/>

					{/* Name matches name in initial values - 
					Note: The data is an array but the individual drop down is a string value */}
					<FormikControlsWrapper
						className="select"
						defaultValue="Pick one"
						control="select"
						label="Select user type"
						name="userType"
						data={mockUserTypes}
					/>

					<FormikControlsWrapper
						control="input"
						className="inpt-box"
						id="wrapper-age"
						name="age"
						placeholder="Must be over 18"
					/>
					{/* validation fails if initial values and name do not match */}
					<FormikControlsWrapper
						control="date"
						className="inpt-box"
						id="wrapper-doB"
						label="Pick your date of birth"
						name="doB"
					/>
					{/* ids for radio and check box set in the component not in the prop */}
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

					<FormikControlsWrapper
						className="text-box"
						control="textarea"
						type="comments"
						id="wrapper-comments"
						label="Comments"
						name="comments"
						placeholder="We welcome your feedback - type comments here"
					/>

					{/* Note type must be submit not button to fire */}
					<button type="submit" className="btn-5" disabled={!formik.isValid || formik.isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default FormikWrapper3;
