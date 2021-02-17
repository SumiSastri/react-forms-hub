import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import FormikErrors from '../formik-errors/FormikErrors';

// REFACTOR with manual validation using render props with Form Component
// Add multiple yup validations

const initialValues = {
	name: {
		firstName: '',
		lastName: ''
	},
	age: '',
	email: '',
	comments: '',
	address: '',
	phoneNumbers: [ 0, 0 ],
	socialHandles: [ '' ],
	documents: '',
	password: '',
	confirmPassword: '',
	agreeToTerms: false
};

const onSubmit = (values, submitProps) => {
	console.log('SUBMITTED ', values);
	// console.log('submitProps', submitProps)
	submitProps.setSubmitting(false);
	submitProps.resetForm();
};

// submit will not fire unless validation passes - name changed to nested object
const validationSchema = Yup.object({
	name: Yup.object({
		firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
		lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required')
	}),
	email: Yup.string().email('Invalid email format').required('Required'),
	age: Yup.number()
		.typeError('Must be a number')
		.positive()
		.integer()
		.moreThan(17)
		.required('Required must be a number'),
	comments: Yup.string().required('Required')
	// password: Yup.string().min(8, 'Minimum 8 characters').required('Required!'),
	// confirmPassword: Yup.string().oneOf([ Yup.ref('password') ], "Password's not match").required('Required!'),
	// agreeToTerms: Yup.boolean()
});

// formik component prop of value tracks the value allows quicker validation at field level
const validatePhoneNumbers = (value) => {
	let error;
	if (!value) {
		error = 'Required';
	}
	return error;
};

export const FormikComponentAdvanced2 = () => {
	const [ formValues, setFormValues ] = useState(null);
	return (
		<Formik initialValues={formValues || initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{(formik) => {
				// console.log('Formik props', formik);
				return (
					<Form>
						<div className="form-control">
							<h1>Formik Advanced</h1>
							<button className="btn-3" type="reset">
								Clear Form Fields
							</button>
							<label htmlFor="name">First Name</label>
							<Field type="text" id="firstName" name="name.firstName" placeholder="First Name" />
							<ErrorMessage name="name.firstName" component={FormikErrors} />
						</div>
						<div className="form-control">
							<label htmlFor="lastName">Last Name</label>
							<Field type="text" id="lastName" name="name.lastName" placeholder="Last Name" />
							<ErrorMessage name="name.lastName" component={FormikErrors} />
						</div>
						<div className="form-control">
							<label htmlFor="age">Age</label>
							<Field type="text" id="age" name="age" placeholder="Must be over 18" />
							<ErrorMessage name="age">{(error) => <div className="error">{error}</div>}</ErrorMessage>
						</div>

						<div className="form-control">
							<label htmlFor="email">Email</label>
							<Field type="email" id="email" name="email" placeholder="Format - email@address.com" />
							<ErrorMessage name="email">{(error) => <div className="error">{error}</div>}</ErrorMessage>
						</div>
						<div className="form-control">
							<label htmlFor="address">Address</label>
							<Field name="address">
								{(props) => {
									const { field, meta } = props;
									// console.log('Log render props method for address', props);
									return (
										<div>
											<input type="text" id="address" {...field} />
											{meta.touched && meta.error && <div>{meta.error}</div>}
										</div>
									);
								}}
							</Field>
						</div>

						{/* field level validation with a custom function */}
						<div className="form-control">
							<label htmlFor="Mobile">Mobile</label>
							<Field
								type="number"
								id="Mobile"
								name="phoneNumbers[0]"
								validate={validatePhoneNumbers}
								placeholder="Numbers no spaces or symbols"
							/>
							<ErrorMessage name="phoneNumbers[0]" component={FormikErrors} />
						</div>

						<div className="form-control">
							<label htmlFor="Landline">Landline</label>
							<Field
								type="number"
								id="Landline"
								name="phoneNumbers[1]"
								validate={validatePhoneNumbers}
								placeholder="Numbers no spaces or symbols"
							/>
							<ErrorMessage name="phoneNumbers[1]" component={FormikErrors} />
						</div>
						<div className="form-control">
							<label htmlFor="comments">Comments</label>
							<Field
								as="textarea"
								id="comments"
								name="comments"
								className="inpt-3"
								placeholder="We welcome your feedback - type comments here"
							/>
							<ErrorMessage name="comments" component={FormikErrors} />
						</div>

						<div className="form-control">
							<label>Social Handles</label>
							<FieldArray name="socialHandles">
								{(fieldArrayProps) => {
									const { push, remove, form } = fieldArrayProps;
									const { values } = form;
									const { socialHandles } = values;
									// console.log('fieldArrayProps', fieldArrayProps);
									// console.log('Form errors', form.errors);
									return (
										<div>
											{socialHandles.map((socialHandles, index) => (
												<div key={index}>
													<Field
														className="inpt-3"
														name={`socialHandles[${index}]`}
														placeholder="Add as many handles here"
													/>
													{index > 0 && (
														<button
															className="btn-2"
															type="button"
															// remove and push functions used to add and remove fields
															onClick={() => remove(index)}
														>
															- Remove this handle
														</button>
													)}
												</div>
											))}
											<button className="btn-2" type="button" onClick={() => push('')}>
												+ Add a handle
											</button>
										</div>
									);
								}}
							</FieldArray>
						</div>
						<button type="button" onClick={() => formik.validateField('name')}>
							Validate name object
						</button>
						<button type="button" onClick={() => formik.setFieldTouched('name')}>
							Visit name object
						</button>
						<button type="button" onClick={() => formik.validateForm()}>
							Validate all
						</button>
						<button
							type="button"
							onClick={() =>
								formik.setTouched({
									name: true,
									email: true,
									comments: true,
									address: true,
									phoneNumbers: true,
									socialHandles: true,
									documents: true
								})}
						>
							Visit all
						</button>
						<button className="btn-1" type="button" onClick={() => setFormValues()}>
							Load saved data
						</button>
						<button className="btn-5" type="submit">
							Submit
						</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default FormikComponentAdvanced2;
