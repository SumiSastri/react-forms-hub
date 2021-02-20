import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import FormikErrors from '../formik-errors/FormikErrors';

// REFACTOR with nested objects, FieldArray, FastField

const initialValues = {
	// nested object
	name: {
		firstName: '',
		lastName: ''
	},
	// strings
	email: '',
	comments: '',
	// address - string with renderProps method
	address: '',
	// arrays with renderProps
	phoneNumbers: [ 0, 0 ],
	// uses FieldArray
	socialHandles: [ '' ],
	// uses FastField
	documents: ''
};

// reset fields on submit add the arg submitProps from Formik Form object
const onSubmit = (values, submitProps) => {
	console.log('SUBMITTED ', values);
	// console.log('submitProps', submitProps)

	submitProps.setSubmitting(false);
	submitProps.resetForm();
};

// submit will not fire unless validation passes - name changed to nested object
const validationSchema = Yup.object({
	// name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
	email: Yup.string().email('Invalid email format').required('Required'),
	comments: Yup.string().required('Required')
});

const validatePhoneNumbers = (value) => {
	let error;
	if (!value) {
		error = 'Required';
	}
	return error;
};

export const FormikComponentAdvanced1 = () => {
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
							<label htmlFor="name">Name</label>
							<Field type="text" id="firstName" name="name.firstName" placeholder="First Name" />
							<ErrorMessage name="name.firstName" component={FormikErrors} />
						</div>
						<div className="form-control">
							<label htmlFor="lastName">Last Name</label>
							<Field type="text" id="lastName" name="name.lastName" placeholder="Last Name" />
							<ErrorMessage name="name.lastName" component={FormikErrors} />
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
											{/* spread field for Formik field methods, use meta to show errors */}
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
						{/* updates only once when updated - no further renders */}
						<div className="form-control">
							<label htmlFor="docs">Documents</label>
							<FastField name="docs" validateOnChange={false} validateOnBlur={false}>
								{({ field, meta }) => {
									console.log('Field render');
									return (
										<div>
											<input type="text" {...field} />
											{meta.touched && meta.error ? <div>{meta.error}</div> : null}
										</div>
									);
								}}
							</FastField>
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
								{/* render props with the param fieldArrayProps - same as address form field 
								function that renders the children of the component via props */}
								{(fieldArrayProps) => {
									// destructure props - the methods baked into FieldArray component - push and remove
									const { push, remove, form } = fieldArrayProps;
									// look at the form object in the console log of props - it has its own methods
									// baked into the Formik Form HoC - this is values.socialHandles
									// this is tracked by matching the name attribute to the value
									const { values } = form;
									// social handles is one of the form values
									const { socialHandles } = values;
									console.log('fieldArrayProps', fieldArrayProps);
									console.log('Form errors', form.errors);
									return (
										<div>
											{/* map through this array and render a field with 
											each item and its index in a Field Formik HoC */}
											{socialHandles.map((socialHandles, index) => (
												<div key={index}>
													{/* dynamically access index */}
													<Field
														className="inpt-3"
														name={`socialHandles[${index}]`}
														placeholder="Add as many handles here"
													/>
													{/* logic to prevent all fields being deleted */}
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

export default FormikComponentAdvanced1;
