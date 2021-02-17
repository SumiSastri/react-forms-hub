import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import FormikErrors from '../formik-errors/FormikErrors';

// REFACTOR with validation
const initialValues = {
	name: {
		firstName: '',
		lastName: ''
	},
	email: '',
	comments: '',
	// address - string with renderProps method
	phoneNumbers: [ 0, 0 ],
	socialHandles: [ '' ],
	documents: ''
};

const onSubmit = (values) => {
	console.log('SUBMITTED ', values);
};

const validationSchema = Yup.object({
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
								{(fieldArrayProps) => {
									const { push, remove, form } = fieldArrayProps;
									const { values } = form;
									const { socialHandles } = values;
									console.log('fieldArrayProps', fieldArrayProps);
									console.log('Form errors', form.errors);
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
