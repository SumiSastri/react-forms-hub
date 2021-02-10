import React from 'react';

import { FormInputComponent } from '../../input-fields/FormInputComponent';
import { ButtonComponent } from '../../buttons/ButtonComponent';
// using custom hooks and validating information
import { UseHooksInForms } from './UseHooksInForms';
import { validateUserInfo } from '../../errors/validation-and-error-messages/ValidateUserInfo';

export const UserAddressesForm = () => {
	// import the custom-hook and call it here with deconstructed params
	// pass the validateUserInfo utility function as a param of the custom-hook
	const { values, handleInputChange, errors, handleFormSubmit } = UseHooksInForms(validateUserInfo);

	return (
		<form
			className="form-container"
			name="reg-form"
			id="reg-form"
			datatestid="reg-form"
			onSubmit={handleFormSubmit}
			noValidate
		>
			<div>
				<h4>
					This additional information is also useful to make sure you have all the information you need from
					us, for your own records.
				</h4>
				<FormInputComponent
					className="inpt-1m"
					datatestid="address1"
					id="address1"
					required={true}
					type="text"
					label="Current Address:"
					placeholder="Current Address"
					name="currentAddress"
					value={values.currentAddress}
					onChange={handleInputChange}
				/>
				{/* If there is an error display error message as described in the validate HoC */}
				{errors.currentAddress && <p>{errors.currentAddress}</p>}
			</div>
			<br />
			<div>
				<FormInputComponent
					className="inpt-1m"
					datatestid="address2"
					id="address2"
					required={true}
					type="text"
					label="Permanent Address:"
					placeholder="Permananent Address"
					name="permAddress"
					value={values.permAddress}
					onChange={handleInputChange}
				/>
				{errors.permAddress && <p>{errors.permAddress}</p>}
			</div>
			<br />
			<div>
				<FormInputComponent
					className="inpt-1m"
					datatestid="address3"
					id="address3"
					required={true}
					type="text"
					label="Forwarding Address:"
					placeholder="Forwarding Address"
					name="forwardingAddress"
					value={values.forwardingAddress}
					onChange={handleInputChange}
				/>
				{errors.forwardingAddress && <p>{errors.forwardingAddress}</p>}
			</div>
			<br />

			<ButtonComponent
				className="btn-5"
				datatestid="addresses-submit"
				name="addresses-submit"
				label="Submit"
				type="submit"
				onSubmit={handleFormSubmit}
			/>
		</form>
	);
};

export default UserAddressesForm;
