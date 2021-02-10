// export a set of validate utility functions - validations libraries also available
export function validateUserInfo(values) {
	let errors = {};

	// for strings remove white space and if errors customise the error message
	if (!values.userName.trim()) {
		errors.userName = 'Username required';
	}
	if (!values.firstName.trim()) {
		errors.firstName = 'First name required';
	}
	if (!values.lastName.trim()) {
		errors.lastName = 'Last name required';
	}

	if (!values.currentAddress.trim()) {
		errors.currentAddress = 'Current Address required';
	}

	if (!values.permAddress.trim()) {
		errors.permAddress = 'Permanent Address required';
	}

	if (!values.forwardingAddress.trim()) {
		errors.forwardingAddress = 'Forwarding Address required';
	}

	if (!values.email) {
		errors.email = 'Email required';
		// regex tests for the at symbol
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Please enter a valid email';
	}
	if (!values.password) {
		errors.password = 'Password is required';
		// can add logic if you want caps/ numbers here
	} else if (values.password.length < 6) {
		errors.password = 'Password needs to be 6 characters or more';
	}

	if (!values.password2) {
		errors.password2 = 'Password is required';
		// if you are asking for password to be written 2 times for the password to match
	} else if (values.password2 !== values.password) {
		errors.password2 = 'Passwords do not match';
	}
	return errors;
}
