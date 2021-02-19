import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

import FormikErrors from '../formik-errors/FormikErrors';
import { mockFetchFormikData } from '../../data/mock-data/formikData';
// REFACTORS - demos for disabling the submit button while api-calls made
// Loading saved datas - mutli-forms to save progress and continue filling form

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
	pass: '',
	confirmPass: '',
	agreeToTerms: false
};

const onSubmit = (values, submitProps) => {
	console.log('SUBMITTED ', values);
	// console.log('submitProps', submitProps)
	submitProps.setSubmitting(false);
	submitProps.resetForm();
};

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
	comments: Yup.string().required('Required'),
	pass: Yup.string().min(3, 'Minimum 3 characters').required('Required!'),
	confirmPass: Yup.string().oneOf([ Yup.ref('pass') ], "Password's do not match").required('Required!')
	// agreeToTerms: Yup.boolean()
});

const validatePhoneNumbers = (value) => {
	let error;
	if (!value) {
		error = 'Required';
	}
	return error;
};

export const FormikComponentAdvanced3 = () => {
	// form values set to the url data saved already
	const [ formValues, setFormValues ] = useState(null);
	return (
		<Formik
			initialValues={formValues || initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			// allows mutli-part data to be saved by re-initialising form with saved values
			// after initial values set - submits the partially filled form
			enableReinitialize

			// instead of validate on touched this validates on component mounting
			// good for small forms with simple validation
			// validateOnMount
		>
			{(formik) => {
				// console.log('Formik props', formik);
				return (
					<Form>
						<div className="form-control">
							<h1>Formik Component</h1>
							<button className="btn-3" type="reset">
								Clear Form Fields
							</button>
							<label htmlFor="name">First Name</label>
							<Field type="text" id="formik-firstName" name="name.firstName" placeholder="First Name" />
							<ErrorMessage name="name.firstName" component={FormikErrors} />
						</div>
						<div className="form-control">
							<label htmlFor="lastName">Last Name</label>
							<Field type="text" id="formik-lastName" name="name.lastName" placeholder="Last Name" />
							<ErrorMessage name="name.lastName" component={FormikErrors} />
						</div>
						<div className="form-control">
							<label htmlFor="age">Age</label>
							<Field type="text" id="formik-age" name="age" placeholder="Must be over 18" />
							<ErrorMessage name="age">{(error) => <div className="error">{error}</div>}</ErrorMessage>
						</div>
						<div className="form-control">
							<label htmlFor="email">Email</label>
							<Field
								type="email"
								id="formik-email"
								name="email"
								placeholder="Format - email@address.com"
							/>
							<ErrorMessage name="email">{(error) => <div className="error">{error}</div>}</ErrorMessage>
						</div>

						<div className="form-control">
							<label htmlFor="pass">Password</label>
							<Field type="password" id="formik-pass" name="pass" placeholder="pass" />
							<ErrorMessage name="pass">{(error) => <div className="error">{error}</div>}</ErrorMessage>
						</div>
						<div className="form-control">
							<label htmlFor="confirmPass">Confirm Password</label>
							<Field
								type="password"
								id="formik-confirmPass"
								name="confirmPass"
								placeholder="confirmPass"
							/>
							<ErrorMessage name="confirmPass">
								{(error) => <div className="error">{error}</div>}
							</ErrorMessage>
						</div>

						<div className="form-control">
							<label htmlFor="address">Address</label>
							<Field name="address">
								{(props) => {
									const { field, meta } = props;
									// console.log('Log render props method for address', props);
									return (
										<div>
											<input type="text" id="formik-address" {...field} />
											{meta.touched && meta.error && <div>{meta.error}</div>}
										</div>
									);
								}}
							</Field>
						</div>
						<div className="form-control">
							<label htmlFor="Mobile">Mobile</label>
							<Field
								type="number"
								id="formik-mobile"
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
								id="formik-landline"
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
								id="formik-comments"
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

						{/* loads previously filled in data - this mimicks a url call */}

						<button className="btn-1" type="button" onClick={() => setFormValues(mockFetchFormikData)}>
							Load saved data
						</button>
						{/* Not good with api-calls - can submit many times */}
						{/* <button className="btn-5" type="submit"> */}
						{/* form state not valid - connected to errors when errors empty isValid true */}
						{/* <button className="btn-5" type="submit" disabled={!formik.isValid}> */}

						{/* The form field has been touched - changed - better than validateOnMount method 
                        on page load the dirty is set to false, if you change from initial value dirty set to true
                        you can use these instead of validate on mount*/}
						{/* <button className="btn-5" type="submit" disabled={formik.dirty}> */}
						{/* disabled={(formik.isValid || !formik.dirty)} */}

						{/* do not submit while api-call being made and form submitting 
                        While this works you also want valid data to be submitted
                        */}
						{/* <button className="btn-5" type="submit" disabled={!formik.isSubmitting}> */}

						{/* disables the button manually and renables it when all fields are correct
                        it allows the user to know that the process is not complete but also prevent
                       GIGO(garbage-in-garbage-out) challenge with incorrect form filling*/}

						{/* IMPORTANT TO DISABLE WITH ASYNC CAllS ESP ECOMMERCE 
                        - ADDS DATA TO CART EVERYTIME THE BUTTON IS CLICKED*/}
						<button className="btn-5" type="submit" disabled={!formik.isValid || formik.isSubmitting}>
							Submit
						</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default FormikComponentAdvanced3;
