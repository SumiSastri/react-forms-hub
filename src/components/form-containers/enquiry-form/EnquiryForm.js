import React, { useState } from 'react';

import { HeaderComponent } from '../../navbars/HeaderComponent';
import { InputText } from '../../input-fields/example-usage/InputText';
import { payrollEnquiryOptions } from '../../data/mock-data/selectFilterDataOptions';
import { SelectFilter } from '../../filters/SelectFilter';
import { ButtonComponent } from '../../buttons/ButtonComponent';
import { DatePickerComponent } from '../../date-picker/DatePickerComponent';

export const EnquiryForm = () => {
	const initialState = '';
	const [ payrollEnquiryType, setPayrollEnquiryType ] = useState(initialState);
	const [ payrollQueryText, setPayrollQueryText ] = useState(initialState);

	return (
		<div>
			<HeaderComponent datatestid="payroll-enquiry-header" name={'payroll-enquiry-header'}>
				<h2>Payroll enquiry </h2>
				<h5>Please use this form for any Payroll related enquiries</h5>
			</HeaderComponent>

			<form onSubmit={() => {}}>
				<SelectFilter
					className="dropdown-menu "
					data={payrollEnquiryOptions}
					datatestid="ddl-payroll-enquiry"
					label="Select Payroll Enquiry Option"
					type="select"
					onChange={(event) => setPayrollEnquiryType(event.target.value)}
					required={true}
					value={payrollEnquiryType}
				/>
				<br />
				<DatePickerComponent />
				<br />
				<InputText
					className="inpt-box"
					datatestid="payroll-query-text-description"
					label="Please type your request here"
					name="payroll-query-text-description"
					onChange={(event) => setPayrollQueryText(event.target.value)}
					placeholder="Please type your request here"
					required={true}
					type="Text"
					value={payrollQueryText}
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
