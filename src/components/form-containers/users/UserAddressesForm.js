import React from 'react';

import { FormInputComponent } from '../../input-fields/FormInputComponent';
import { ButtonComponent } from '../../buttons/ButtonComponent';
import { UseHooksInForms } from './UseHooksInForms';

export const UserAddressesForm = () => {
	// import the hook and call it here with deconstructed params
	const { values, handleInputChange } = UseHooksInForms();

	return (
		<form name="reg-form" id="reg-form" datatestid="reg-form">
			<div>
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
			</div>
			<br />

			<ButtonComponent
				className="button-one"
				datatestid="addresses-submit"
				name="addresses-submit"
				label="Submit"
				type="submit"
			/>
		</form>
	);
};

export default UserAddressesForm;
