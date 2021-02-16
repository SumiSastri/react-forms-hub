import React, { useState } from 'react';
// import the Formik Hook  and the components associated with the hook
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormikErrors from '../formik-errors/FormikErrors';

const initialValues = {
	name: '',
	email: '',
	userType: '',
	comments: ''
};

const onSubmit = (values) => {
	console.log('SUBMITTED ', values);
};

const validationSchema = Yup.object({
	name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
	email: Yup.string().email('Invalid email format').required('Required'),
	userType: Yup.string().required('Required')
});

export const FormikBasicContextForm = () => {
	const [ formValues, setFormValues ] = useState(null);
	return (
		// The HoC Formik used instead of div
		<Formik initialValues={formValues || initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{(formik) => {
				// console.log('Formik props', formik);
				return (
					// Form HoC is from Formik
					// Remove on submit prop from Form component
					// This component has an implicit on-submit written into the HoC
					<Form>
						<div className="form-control">
							<h1>Formik Component</h1>
							<label htmlFor="name">Name</label>
							{/* Field HoC is from Formik  */}
							<Field
								type="text"
								id="name"
								name="name"
								// No longer required - part of old method
								// {...formik.getFieldProps('name')}
								// No longer required - hoisted
								// initialValues={formValues || initialValues}
							/>
							<ErrorMessage name="name" component={FormikErrors} />
							{/* This gets replaced with the Formik HoC for Errors
							Errors tracked via name attribute which tracks state of the component
							{formik.touched.name && formik.errors.name && <p className="error">{formik.errors.name}</p>} */}
						</div>

						<div className="form-control">
							<label htmlFor="email">Email</label>
							<Field type="email" id="email" name="email" />
							{/* use render props method on rendering errors */}
							<ErrorMessage name="email">{(error) => <div className="error">{error}</div>}</ErrorMessage>
						</div>

						<div className="form-control">
							<label htmlFor="userType">User Type</label>
							<Field type="text" id="userType" name="userType" />
							<ErrorMessage name="userType" component={FormikErrors} />
						</div>

						<div className="form-control">
							<label htmlFor="address">Address</label>
							{/* the id and field type go into the render props input */}
							<Field name="address">
								{(props) => {
									const { field, meta } = props;
									// console.log('Log render props method for address', props);
									// three props are filed, form and meta
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

						<div className="form-control">
							<label htmlFor="comments">Comments</label>
							{/* use as or component instead of type for input-type */}
							<Field
								as="textarea"
								// was deprecated but in use again
								// component="textarea"
								id="comments"
								name="comments"
								placeholder="We welcome your feedback - type comments here"
							/>
							<ErrorMessage name="comments" component={FormikErrors} />
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

export default FormikBasicContextForm;
