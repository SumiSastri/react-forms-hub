import React, { useState } from 'react';

import { HeaderComponent } from '../../navbars/HeaderComponent';
import { InputText } from '../../input-fields/example-usage/InputText';
import { payrollEnquiryOptions } from '../../data/mock-data/selectFilterDataOptions';
import { SelectFilter } from '../../filters/SelectFilter';
import { ButtonComponent } from '../../buttons/ButtonComponent';
import { DatePickerComponent } from '../../date-picker/DatePickerComponent';

export const EnquiryForm = () => {
	const initialState = '';
	const [ payrollEnquiryType, setPayrollEnquiryType ] = useState('Select one');
	const [ payrollQueryText, setPayrollQueryText ] = useState(initialState);
	const [ dateEntered, setDateEntered ] = useState(initialState);
	const [ submitted, setSubmitted ] = useState(false);
	const [ isValidated, setIsValidated ] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (payrollEnquiryType && payrollQueryText && dateEntered) {
			setIsValidated(true);
		}
		const newPayrollEnquiry = { payrollEnquiryType, payrollQueryText, dateEntered };
		console.log(newPayrollEnquiry);
		setSubmitted(true);
	};

	return (
		<div>
			<HeaderComponent datatestid="payroll-enquiry-header" name={'payroll-enquiry-header'}>
				<h2>Payroll enquiry </h2>
				<h5>Please use this form for any Payroll related enquiries</h5>
			</HeaderComponent>

			<form onSubmit={handleSubmit}>
				{submitted && isValidated ? (
					<div>
						<p>Your form has been submitted</p>
					</div>
				) : null}
				<SelectFilter
					className="select"
					data={payrollEnquiryOptions}
					datatestid="ddl-payroll-enquiry"
					label="SELECT A PAYROLL ENQUIRY OPTION"
					type="select"
					value={payrollEnquiryType}
					onChange={(event) => setPayrollEnquiryType(event.target.value)}
				>
					<option key={payrollEnquiryOptions.id} value={payrollEnquiryOptions.value}>
						{payrollEnquiryOptions.label}
					</option>
				</SelectFilter>
				<br />
				<DatePickerComponent value={dateEntered} onChange={(event) => setDateEntered(event.target.value)} />
				<br />
				{submitted && !dateEntered ? <span>You forgot to select a date</span> : null}
				<InputText
					className="inpt-box"
					datatestid="payroll-query-text-description"
					label="Please type your request here"
					name="payroll-query-text-description"
					placeholder="Please type your request here"
					type="text"
					value={payrollQueryText}
					onChange={(event) => setPayrollQueryText(event.target.value)}
				/>
				{submitted && !payrollQueryText ? <span>You forgot to enter a query</span> : null}
				<br />
				<ButtonComponent
					className="button-one"
					datatestid="payroll-query-save-btn"
					label="Save"
					name="payroll-query-save-btn"
					onClick={handleSubmit}
				/>
			</form>
		</div>
	);
};
export default EnquiryForm;
