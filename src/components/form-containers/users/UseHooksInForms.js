import { useState } from 'react';

// custom Hook - use key word to name the hook
export const UseHooksInForms = () => {
	const [ values, setValues ] = useState({
		// without state the form changes from a controlled to an uncontrolled component
		currentAddress: '',
		permAddress: '',
		forwardingAddress: ''
	});

	const handleInputChange = (e) => {
		// deconstruct to use the key value notation in the setValues object
		const { name, value } = e.target;
		// spread the values of state and then update the input
		setValues({
			...values,
			[name]: value
		});
	};
	// add handleSubmit - prevent default submission
	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	return { handleInputChange, values, handleFormSubmit };
};

export default UseHooksInForms;
