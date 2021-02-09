import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import logo from '../../assets/navbar-logo.svg';
import { HeaderComponent } from '../../navbars/HeaderComponent';
import { FormInputComponent } from '../../input-fields/FormInputComponent';
import { payrollEnquiryOptions } from '../../data/mock-data/selectFilterDataOptions';
import { SelectFilterComponent } from '../../filters/SelectFilterComponent';
import { ButtonComponent } from '../../buttons/ButtonComponent';
import SubmitFormSuccess from '../../errors/no-errors/SubmitFormSuccess';

export const EnquiryForm = () => {
	const initialState = '';
	const [ payrollEnquiryType, setPayrollEnquiryType ] = useState('Incorrect-Pay');
	const [ payrollQueryText, setPayrollQueryText ] = useState(initialState);
	const [ selectedDate, setSelectedDate ] = useState(initialState);
	const [ submitted, setSubmitted ] = useState(false);
	const [ isValidated, setIsValidated ] = useState(false);
	// const [ errors, setErrors ] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();

		const newPayrollEnquiry = { payrollEnquiryType, payrollQueryText, selectedDate };
		console.log(newPayrollEnquiry);

		if (!payrollEnquiryType && !payrollQueryText && !selectedDate) {
			// setErrors(setIsValidated(false));
		} else {
			setIsValidated(true);
			setSubmitted(true);
		}

		// useEffect hook  - refactor

		// const submitPayload = (newPayrollEnquiry) {
		// fetch('/payroll', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify(submitPayload)
		// }).then(() => {
		// 	console.log('new payload sent to db', submitPayload);
		// });};
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
						<h4>Please use this form for any Payroll related enquiries</h4>
					</section>
				}
			/>
			<br />
			<form onSubmit={handleSubmit}>
				{submitted && isValidated ? <SubmitFormSuccess /> : null}
				<br />
				<SelectFilterComponent
					className="select"
					data={payrollEnquiryOptions}
					datatestid="ddl-payroll-enquiry"
					label="SELECT A PAYROLL ENQUIRY OPTION"
					required={true}
					type="select"
					value={payrollEnquiryType}
					onChange={(event) => setPayrollEnquiryType(event.target.value)}
				>
					<option key={payrollEnquiryOptions.id} value={payrollEnquiryOptions.value}>
						{payrollEnquiryOptions.label}
					</option>
				</SelectFilterComponent>

				{payrollEnquiryOptions[0] || payrollEnquiryOptions[1] ? (
					<div style={{ width: '75%', border: '2px solid grey' }}>
						<DatePicker
							isClearable={true}
							dateFormat="dd/MM/yyyy"
							monthsShown={2}
							onChange={(date) => setSelectedDate(date)}
							placeholderText="Click here for calendar"
							required={true}
							selected={selectedDate}
							showYearDropdown
							scrollableMonthYearDropdown
							onSubmit={onsubmit}
						/>
					</div>
				) : null}
				<br />
				{submitted && !selectedDate ? <span style={{ color: 'red' }}>You forgot to select a date</span> : null}
				<FormInputComponent
					className="inpt-box "
					datatestid="payroll-query-text-description"
					label="Please type your request here"
					name="payroll-query-text-description"
					placeholder="Please type your request here"
					required={true}
					type="text"
					value={payrollQueryText}
					onChange={(event) => setPayrollQueryText(event.target.value)}
				/>
				{submitted && !payrollQueryText ? (
					<span style={{ color: 'red' }}>You forgot to enter your enquiry</span>
				) : null}
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
