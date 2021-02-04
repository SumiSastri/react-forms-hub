import React, { useState } from 'react';
import '../styles/filterStyles.css';

export function SelectFilterHooks({
	title, items =[], multiSelect=false
}) {
	const [ isOpen, setIsOpen ] = useState(false);
	const handleToggle = () => setIsOpen(!isOpen);

	const [ ddlSelection, setDdlSelection ] = useState([]);
	const  handleOnClick = (item) => 
	{if(!ddlSelection.some(currentItemSelected => 
		currentItemSelected.id === item.id)){
		if(!multiSelect){
			setDdlSelection([item])
		}
	}
}} 
	return (
		<div>
			<h5>{isOpen ? 'Close' : label}</h5>
			<select
				className={className}
				data={data}
				datatestid={datatestid}
				name={name}
				onKeyPress={() => {
					handleToggle(!isOpen);
				}}
				onClick={() => {
					handleToggle(!isOpen);
				}}
				onChange={onChange}
				options={options}
				onSubmit={onSubmit}
				required={required}
				value={value}
			>
				{isOpen && (
					<ul>
						{data.map((key, value) => (
							<option key={key} value={value}>
								{value}
							</option>
						))}
					</ul>
				)}
			</select>
		</div>
	);
}



export default SelectFilterHooks;
