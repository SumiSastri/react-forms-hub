import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// this is already a reusable component - so used directly in the form
export const DatePickerComponent = () => {
	let initialState = null;
	const [ selectedDate, setSelectedDate ] = useState(initialState);

	return (
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
	);
};
export default DatePickerComponent;
