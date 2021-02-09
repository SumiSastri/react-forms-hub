import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import logo from '../../assets/navbar-logo.svg';
import { HeaderComponent } from '../../navbars/HeaderComponent';
import { FormInputComponent } from '../../input-fields/FormInputComponent';
import { payrollEnquiryOptions } from '../../data/mock-data/selectFilterDataOptions';
import { SelectFilterComponent } from '../../filters/SelectFilterComponent';
import { ButtonComponent } from '../../buttons/ButtonComponent';

export const EnquiryForm = () => {
	const initialState = '';
	const [ payrollEnquiryType, setPayrollEnquiryType ] = useState('Select one');
	const [ payrollQueryText, setPayrollQueryText ] = useState(initialState);
	const [ selectedDate, setSelectedDate ] = useState(initialState);
	const [ submitted, setSubmitted ] = useState(false);
	const [ isValidated, setIsValidated ] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (payrollEnquiryType && payrollQueryText && selectedDate) {
			setIsValidated(true);
		}
		const newPayrollEnquiry = { payrollEnquiryType, payrollQueryText, selectedDate };
		console.log(newPayrollEnquiry);

		// const submitPayload = { };
		// fetch('url', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify(submitPayload)
		// }).then(() => {
		// 	console.log('new payload sent to db', submitPayload);
		// });

		setSubmitted(true);
	};

	return (
		<div>
			<HeaderComponent
				datatestid="payroll-enquiry-header"
				name={'payroll-enquiry-header'}
				children={
					<section>
						<div>
							<img className="logo-branding" alt="logo" src={logo} />
						</div>
						<h2>Payroll enquiry </h2>
						<h5>Please use this form for any Payroll related enquiries</h5>
					</section>
				}
			/>

			<form onSubmit={handleSubmit}>
				{submitted && isValidated ? (
					<div>
						<h6>Your form has been submitted</h6>
					</div>
				) : null}
				<SelectFilterComponent
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
				</SelectFilterComponent>
				<br />
				{payrollEnquiryOptions[0] || payrollEnquiryOptions[1] ? (
					<div style={{ width: '25%', border: '2px solid grey' }}>
						<h5>Click to select a date:</h5>
						<DatePicker
							isClearable={true}
							dateFormat="dd/MM/yyyy"
							monthsShown={4}
							onChange={(date) => setSelectedDate(date)}
							placeholderText="Click to select a date"
							selected={selectedDate}
							showYearDropdown
							scrollableMonthYearDropdown
							onSubmit={onsubmit}
						/>
					</div>
				) : null}
				<br />
				{submitted && !selectedDate ? <span>You forgot to select a date</span> : null}
				<FormInputComponent
					className="inpt-box "
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
