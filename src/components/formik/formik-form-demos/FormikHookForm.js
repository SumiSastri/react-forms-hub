import React from 'react';
import { useFormik } from 'formik';

// HOIST ALL VARIABLES

// state management - with initial values as null for all form fields passed into the useFormik hook
// these correspond to the name attribute in the JSX - name, onchange, values tightly coupled
// default values
const initialValues = {
	name: '',
	email: '',
	userType: ''
};
// automatically receives values of the form as its param
// the values then submitted - removes the need to write prevent default method
const onSubmit = (values) => {
	console.log('Form data', values);
	// write a method here to submit to a db
};

// manual validation formik validation the validate method takes values as its arg
// vlaues is the properites for each form field
// validation-errors and submit are tightly coupled
const validate = (values) => {
	// initial errors null
	const errors = {};
	// values and input attribe of namespaces must match
	if (!values.name) {
		// the keys of the errors object must be similar to that of the values object
		errors.name = 'You forgot to provide a name, this field is required';
		// The error return expectation is a string
	}

	if (!values.email) {
		errors.email = 'You have not provided an email address, this is a mandatory field';
		// regex validation - checks if email is empty and has an at sign
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'You have not provided a valid email, please check and update';
	}

	if (!values.userType) {
		errors.userType = 'You have forgotten to provide a user type, this field is required';
	}

	return errors;
};

function FormikHookForm() {
	// instantiate the hook it holds the methods to set state of the react form
	const formik = useFormik({
		initialValues,
		onSubmit,
		validate
	});

	console.log('formik.touched method - visited fields', formik.touched);
	// console.log('Form values', formik.values);
	return (
		// formik object's helper method helps the handle submit
		<form onSubmit={formik.handleSubmit}>
			<div className="form-control">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					// formik object abstracts the need to handle change
					// no need to write an onchange handler as in react or with react-hooks
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{/* conditionally render the errors once the touched method called */}
				{formik.touched.name && formik.errors.name && <p className="error">{formik.errors.name}</p>}
			</div>

			<div className="form-control">
				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					id="email"
					name="email"
					onChange={formik.handleChange}
					value={formik.values.email}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}
			</div>

			<div className="form-control">
				<label htmlFor="userType">User Type</label>
				<input
					type="text"
					id="userType"
					name="userType"
					onChange={formik.handleChange}
					value={formik.values.userType}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.userType && formik.errors.userType && <p className="error">{formik.errors.userType}</p>}
			</div>

			<button type="submit">Submit</button>
		</form>
	);
}

export default FormikHookForm;
