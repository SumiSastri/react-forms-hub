import React, { useState } from 'react';
// import the Formik Hook  and the components associated with the hook
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormikErrors from '../formik-errors/FormikErrors';

const initialValues = {
	name: '',
	email: '',
	userType: ''
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
							<ErrorMessage name="email">{(error) => <div className="error">{error}</div>}</ErrorMessage>
						</div>

						<div className="form-control">
							<label htmlFor="userType">User Type</label>
							<Field type="text" id="userType" name="userType" placeholder="userType" />
							<ErrorMessage name="userType" />
						</div>

						<button type="button" onClick={() => setFormValues()}>
							Load saved data
						</button>
						<button type="submit">Submit</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default FormikBasicContextForm;
