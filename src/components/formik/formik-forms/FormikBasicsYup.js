import React from 'react';
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

export const FormikBasicsYup = () => {
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
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					{...formik.getFieldProps('name')}
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
					// onChange={formik.handleChange}
					// value={formik.values.email}
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
					// onChange={formik.handleChange}
					// value={formik.values.userType}
					// onBlur={formik.handleBlur}
				/>
				{formik.touched.userType && formik.errors.userType && <p className="error">{formik.errors.userType}</p>}
			</div>

			<button type="submit">Submit</button>
		</form>
	);
};

export default FormikBasicsYup;
