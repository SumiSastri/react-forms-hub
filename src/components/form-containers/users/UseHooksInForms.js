import { useState, useEffect } from 'react';

// custom Hook - use key word to name the hook
export const UseHooksInForms = (validateUserInfo, callback) => {
	// set-state is replaced by the useState hook
	const [ values, setValues ] = useState({
		// without state the form changes from a controlled to an uncontrolled component
		userName: '',
		email: '',
		password: '',
		phone1: 123,
		currentAddress: '',
		permAddress: '',
		forwardingAddress: '',
		modalIsOpen: false
	});

	const handleInputChange = (e) => {
		// the object's target values deconstructed
		const { name, value } = e.target;
		// spread the values of state and then update the input
		setValues({
			...values,
			[name]: value
		});
	};

	// errors, submit and validation closely coupled
	const [ formSubmit, setFormSubmit ] = useState(false);
	const [ errors, setErrors ] = useState({});
	// add handleSubmit - prevent default submission
	const handleFormSubmit = (e) => {
		e.preventDefault();
		// before submitting form check for errors by validating the target value field
		// witht the utility functions validateUserInfo set to check each value
		setErrors(validateUserInfo(values));
		// after default prevented, submit form
		setFormSubmit(true);
	};
	// submit form with useEffect hook if there are 0 errors
	useEffect(
		() => {
			// this is the global object constructor if there are zero errors then submit form
			if (Object.keys(errors).length === 0 && formSubmit) {
				callback();
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ errors ]
	);
	// handleChange & values closely coupled so are handleSubmit & errors
	return { handleInputChange, values, handleFormSubmit, errors };
};

export default UseHooksInForms;
