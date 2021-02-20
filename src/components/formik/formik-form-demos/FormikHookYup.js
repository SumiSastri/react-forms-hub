import React, { useState } from 'react';
// this will be replaced with the context Formik hook
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

export const FormikHookYup = () => {
	// Hooks refactor - hoist hooks variables
	const [ formValues, setFormValues ] = useState(null);
	// this will be replaced with the HoC Formik Component
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema
	});

	// console.log('formik.touched method - visited fields', formik.touched);
	// console.log('Form values', formik.values);
	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="form-control">
				<h1>useFormik Hook</h1>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					{...formik.getFieldProps('name')}
					initialValues={formValues || initialValues}
					// value={formik.values.name}
					// onChange={formik.handleChange}
					// onBlur={formik.handleBlur}
				/>
				{formik.touched.name && formik.errors.name && <p className="error">{formik.errors.name}</p>}
			</div>

			<div className="form-control">
				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					id="email"
					name="email"
					{...formik.getFieldProps('email')}
					initialValues={formValues || initialValues}
					// value={formik.values.email}
					// onChange={formik.handleChange}
					// onBlur={formik.handleBlur}
				/>
				{formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}
			</div>

			<div className="form-control">
				<label htmlFor="userType">User Type</label>
				<input
					type="text"
					id="userType"
					name="userType"
					{...formik.getFieldProps('userType')}
					initialValues={formValues || initialValues}
					// value={formik.values.userType}
					// onChange={formik.handleChange}
					// onBlur={formik.handleBlur}
				/>
				{formik.touched.userType && formik.errors.userType && <p className="error">{formik.errors.userType}</p>}
			</div>
			<button className="btn-1" type="button" onClick={() => setFormValues()}>
				Load saved data
			</button>
			<button className="btn-5" type="submit">
				Submit
			</button>
			{/* <button onClick={() => resetFormValues(initialValues)}>Cancel</button> */}
		</form>
	);
};

export default FormikHookYup;
