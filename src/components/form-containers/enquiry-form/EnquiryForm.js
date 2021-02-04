import React from 'react';

import { HeaderComponent } from '../../navbars/HeaderComponent';
import { InputField } from '../../input-fields/InputField';
import { payrollEnquiryOptions } from '../../data/mock-data/selectFilterDataOptions';
import { SelectFilter } from '../../filters/SelectFilter';

export const EnquiryForm = () => {
	return (
		<div>
			<HeaderComponent datatestid="payroll-enquiry-header" name={'payroll-enquiry-header'}>
				<h2>Payroll enquiry </h2>
				<h5>Please use this form for any Payroll related enquiries</h5>
			</HeaderComponent>

			<form>
				<SelectFilter
					className="inpt-1s"
					defaultValue="default"
					data={payrollEnquiryOptions}
					datatestid="ddl-payroll-enquiry"
					label="Select Payroll Enquiry"
					name="ddl-payroll-enquiry"
					// onChange={(event) => this.updateSearchInputs('user', event.target.value)}
					placeholder="Select enquiry type"
					required={true}
					type="select"
					// value={payrollEnquiryType}
				/>
				<InputField
					className="inpt-box"
					datatestid="payroll-query-text-description"
					name="payroll-query-text-description"
					// onChange={onChange}
					placeholder="Please type your request here"
					required={true}
					type="Text"
					// value={value}
				/>
			</form>
		</div>
	);
};
