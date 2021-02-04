import React from 'react';
import '../../styles/inputStyles.css';

import { InputField } from '../InputField';

export const InputText = ({ label, placeholder, datatestid, name, value, onChange, onSubmit }) => {
	return (
		<div>
			<InputField
				className="text-box"
				datatestid={datatestid}
				placeholder={placeholder}
				name={name}
				onChange={onChange}
				onSubmit={onSubmit}
				type="text"
				value={value}
				label={label}
			/>
		</div>
	);
};
export default InputText;
