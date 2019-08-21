import React from 'react';
import './form-navbars.css';

const FormHeader = () => {
	return (
		<div className="form-navbar-header-container">
			<div className="nav-header-branding">
			<h1>A Library of Form Inputs</h1>
			</div>
			<div className="nav-bar-content">
			<ul className="navbar-links">
				<li>Text, Numbers & Passwords</li>
				<li>Buttons</li>
				<li>Search & Select Filters</li>
				<li>Check-Boxes & Toggles</li>
				<li>Progress Bars</li>
				<li>Time & Date Pickers</li>
			</ul>
			</div>
		</div>
	);
};
export default FormHeader;
