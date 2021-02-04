import React from 'react';

import { HeaderComponent } from '../../navbars/HeaderComponent';
import { InputField } from '../../input-fields/InputField';
import { payrollEnquiryOptions } from '../../data/mock-data/selectFilterDataOptions';
import { SelectFilter } from '../../filters/SelectFilter';
import { ButtonComponent } from '../../buttons/ButtonComponent';
import { DatePickerComponent } from '../../date-picker/DatePickerComponent';

export const EnquiryForm = () => {
	return (
		<div>
			<HeaderComponent datatestid="payroll-enquiry-header" name={'payroll-enquiry-header'}>
				<h2>Payroll enquiry </h2>
				<h5>Please use this form for any Payroll related enquiries</h5>
			</HeaderComponent>

			<form onSubmit={() => {}}>
				<SelectFilter
					className="dropdown-menu "
					defaultValue="default"
					data={payrollEnquiryOptions}
					datatestid="ddl-payroll-enquiry"
					label="Select Payroll Enquiry"
					name="ddl-payroll-enquiry"
					onChange={() => {}}
					// onChange={(event) => this.updateSearchInputs('payrollEnquiryType', event.target.value)}
					placeholder="Select enquiry type"
					// conditional addition of this prop
					required={true}
					type="select"
					// value={payrollEnquiryType}
				/>
				<DatePickerComponent />
				<InputField
					className="inpt-box"
					datatestid="payroll-query-text-description"
					name="payroll-query-text-description"
					onChange={() => {}}
					placeholder="Please type your request here"
					required={true}
					type="Text"
					// value={value}
				/>

				<ButtonComponent
					className="button-one"
					datatestid="payroll-query-save-btn"
					// logic to enable and disable
					disabled={false}
					label="Save"
					name="payroll-query-save-btn"
					onSubmit={() => {}}
					required={true}
					// value={value}
				/>
			</form>
		</div>
	);
};
