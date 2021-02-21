import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// REFACTOR ADDS nested object and validation
import FormikControlsWrapper from '../formik-wrapper-components/FormikControlsWrapper';
import { mockUserTitle, mockMusicGenres, mockUserTypes } from '../../data/mock-data/formikData';
import FormikSuccess from '../formik-errors/FormikSuccess';
export const FormikWrapper4 = () => {
	const initialValues = {
		age: '',
		comments: '',
		doB: null,
		email: '',
		musicGenre: [],
		name: {
			firstName: '',
			lastName: ''
		},
		pass: '',
		passConfirm: '',
		userTitle: '',
		userType: '',
		phoneNumbers: {
			landline: '',
			mobile: ''
		}
	};

	const validationSchema = Yup.object({
		age: Yup.number()
			.typeError('Must be a number')
			.positive()
			.integer()
			.moreThan(17)
			.required('Required must be a number'),
		comments: Yup.string().required('Required'),
		doB: Yup.date().required('Click input field & select date').nullable(),
		email: Yup.string().email('Invalid email format').required('Required'),
		musicGenre: Yup.array().min(1, 'At least one box must be ticked').required('Required'),
		name: Yup.object({
			firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
			lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required')
		}),
		pass: Yup.string().min(3, 'Minimum 3 characters').required('Required'),
		// ref the password node and match
		passConfirm: Yup.string().oneOf([ Yup.ref('pass') ], "Password's do not match").required('Required'),
		// conditional validation
		phoneNumbers: Yup.object({
			landline: Yup.number()
				.typeError('Must be a number')
				.positive('Must contain postive values')
				.integer()
				.nullable(),
			mobile: Yup.number()
				.typeError('Must be a number')
				.positive('Must contain postive values')
				.integer()
				.nullable()
				.required('A mobile phone number is required')
		}),
		userTitle: Yup.string().required('Required'),
		userType: Yup.string().required('Required')
	});

	const onSubmit = (values, submitProps) => {
		console.log('SUBMITTED WRAPPER DATA', values);
		// console.log('Saved data', JSON.parse(JSON.stringify(values)));
		submitProps.setSubmitting(false);
		submitProps.resetForm();
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{/* render props using formik as props and the HoC Form */}
			{(formik) => (
				<Form>
					{formik.isValid && formik.submitted ? (
						<FormikSuccess />
					) : (
						<div>
							<h2>Formik Hub</h2>
							<FormikControlsWrapper
								control="radio"
								type="radio"
								id="wrapper-userTitle"
								label="Title"
								name="userTitle"
								data={mockUserTitle}
							/>
							<FormikControlsWrapper
								className="inpt-box"
								control="input"
								type="text"
								id="wrapper-firstName"
								label="First Name"
								name="name.firstName"
								placeholder="First Name"
							/>

							<FormikControlsWrapper
								className="inpt-box"
								control="input"
								type="text"
								id="wrapper-lastName"
								label="Last Name"
								name="name.lastName"
								placeholder="Last Name"
							/>

							<FormikControlsWrapper
								className="inpt-box"
								control="input"
								type="email"
								id="wrapper-email"
								label="Email"
								name="email"
								placeholder="Format - email@address.com"
							/>
							{/* type as number leads to a bug */}
							<FormikControlsWrapper
								className="inpt-box"
								control="input"
								type="text"
								id="wrapper-landline"
								label="Landline"
								name="phoneNumbers.landline"
							/>
							<FormikControlsWrapper
								className="inpt-box"
								control="input"
								type="text"
								id="wrapper-mobile"
								label="Mobile Phone"
								name="phoneNumbers.mobile"
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
								type="text"
								id="wrapper-passConfirm"
								label="Confirm Password"
								name="passConfirm"
								placeholder="Passwords must match"
							/>
							{/* Note: The data is an array - id is in select component
					but the individual drop down is a string value */}
							<FormikControlsWrapper
								className="select"
								control="select"
								type="select"
								label="Select user type"
								name="userType"
								data={mockUserTypes}
							/>
							<FormikControlsWrapper
								className="inpt-box"
								control="input"
								type="text"
								id="wrapper-age"
								label="Age"
								name="age"
								placeholder="Must be over 18"
							/>
							{/* validation fails if initial values and name do not match */}
							<FormikControlsWrapper
								className="inpt-box"
								control="date"
								type="text"
								id="wrapper-doB"
								label="Pick your date of birth"
								name="doB"
							/>
							{/* id baked into the checkbox component */}
							<FormikControlsWrapper
								control="checkbox"
								type="checkbox"
								label="Music Genre"
								name="musicGenre"
								data={mockMusicGenres}
							/>

							<FormikControlsWrapper
								className="text-box"
								control="textarea"
								type="text"
								id="wrapper-comments"
								label="Comments"
								name="comments"
								placeholder="We welcome your feedback - type comments here"
							/>

							{/* Note type must be submit not button to fire */}
							<button type="submit" className="btn-5" disabled={!formik.isValid || formik.isSubmitting}>
								Submit
							</button>
						</div>
					)}
				</Form>
			)}
		</Formik>
	);
};

export default FormikWrapper4;
