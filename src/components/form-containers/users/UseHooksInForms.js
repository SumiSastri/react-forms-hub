import { useState } from 'react';

// custom Hook - use key word to name the hook
export const UseHooksInForms = () => {
	const [ values, setValues ] = useState({
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

	return { handleInputChange, values };
};

export default UseHooksInForms;
