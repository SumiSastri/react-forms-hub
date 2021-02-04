import React from 'react';
// import logo from '../assets/navbar-logo.svg';

export const HeaderComponent = ({ children, className, datatestid, image, name, onClick }) => {
	return (
		<div className={className} datatestid={datatestid} image={image} name={name} onClick={onClick}>
			{/* <img className="navbar-logos-branding" alt="logo" src={logo} /> */}
			{children}
		</div>
	);
};
