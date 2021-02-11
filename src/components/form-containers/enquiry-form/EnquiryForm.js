import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import logo from '../../assets/navbar-logo.svg';
import { HeaderComponent } from '../../navbars/HeaderComponent';
import { FormInputComponent } from '../../input-fields/FormInputComponent';
import { payrollEnquiryOptions } from '../../data/mock-data/selectFilterDataOptions';
import { SelectFilterComponent } from '../../filters/SelectFilterComponent';
import { ButtonComponent } from '../../buttons/ButtonComponent';
import SubmitFormSuccess from '../../errors/sucess-no-errors/SubmitFormSuccess';

export const EnquiryForm = () => {
	const initialState = '';
	const [ payrollInfo, setPayrollInfo ] = useState(null);
	const [ payrollEnquiryType, setPayrollEnquiryType ] = useState('Incorrect-Pay');
	const [ payrollQueryText, setPayrollQueryText ] = useState(initialState);
	const [ selectedDate, setSelectedDate ] = useState(initialState);
	const [ submitted, setSubmitted ] = useState(false);
	const [ isValidated, setIsValidated ] = useState(false);
	const [ errors, setErrors ] = useState({});

	// fetch data and set it to the info in the state object
	const fetchPayrollApiData = async () => {
		setSubmitted(true);
		const res = await fetch('/payroll');
		// console.log(res);
		const data = await res.json();
		setSubmitted(false);
		setPayrollInfo(data);
	};

	useEffect(() => {
		fetchPayrollApiData();
	}, []);

	// post form data to db
	const postPayrollFormPayload = async (payrollInfo) => {
		await fetch('/payroll', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payrollInfo)
		});
	};

	// errors, validation and submit closely coupled
	const handleSubmit = (e) => {
		e.preventDefault();

		const payrollInfo = { payrollEnquiryType, payrollQueryText, selectedDate };
		console.log(`payrollInfo`, payrollInfo);

		if (!payrollEnquiryType && !payrollQueryText && !selectedDate) {
			setErrors(setIsValidated(false));
			setIsValidated(false);
		} else {
			setIsValidated(true);
			postPayrollFormPayload(payrollInfo);
			setSubmitted(true);
		}
	};

	return (
		<div className="form-container">
			<HeaderComponent
				datatestid="payroll-enquiry-header"
				name={'payroll-enquiry-header'}
				children={
					<section>
						<div>
							<img className="logo-branding" alt="logo" src={logo} />
						</div>
						<h2>Payroll enquiry </h2>
					</section>
				}
			/>
			<br />
			<form onSubmit={handleSubmit}>
				{submitted && isValidated ? (
					<SubmitFormSuccess />
				) : (
					<h4>Please use this form for any Payroll related enquiries</h4>
				)}
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
					onSubmit={onsubmit}
				>
					<option key={payrollEnquiryOptions.id} value={payrollEnquiryOptions.value}>
						{payrollEnquiryOptions.label}
					</option>
				</SelectFilterComponent>
				{payrollEnquiryOptions[0] || payrollEnquiryOptions[1] ? (
					<div style={{ width: '75%', border: '2px solid grey' }}>
						<DatePicker
							dateFormat="dd/MM/yyyy"
							isClearable={true}
							monthsShown={2}
							placeholderText="Click here for calendar"
							required={true}
							showYearDropdown
							scrollableMonthYearDropdown
							selected={selectedDate}
							onChange={(date) => setSelectedDate(date)}
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
					onSubmit={onsubmit}
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
					disabled={false}
				/>
			</form>
			<div style={{ width: '100%', margin: '10px', border: '2px solid grey' }}>
				{console.log(payrollEnquiryType, payrollEnquiryOptions, payrollQueryText, errors)}
				TEST DATA:{JSON.stringify(payrollInfo, null, 8)}
			</div>
		</div>
	);
};
export default EnquiryForm;
