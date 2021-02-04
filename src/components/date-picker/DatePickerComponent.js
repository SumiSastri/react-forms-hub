import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerComponent = () => {
	let initialState = null;
	const [ selectedDate, setSelectedDate ] = useState(initialState);

	return (
		<div>
			<p>Select a date:</p>
			<DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
		</div>
	);
};
export default DatePickerComponent;
