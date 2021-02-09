import React from 'react';
import '../styles/headerStyles.css';
import PropTypes from 'prop-types';

export const HeaderComponent = ({ children, className, datatestid, id, image, name, isOpen, onClick }) => {
	return (
		<div
			className={className}
			datatestid={datatestid}
			id={id}
			image={image}
			isOpen={isOpen}
			name={name}
			onClick={onClick}
		>
			{
				children
				// = {// <div>
				//     <img className={className} alt="logo" src={logo} />
				// </div>
				// <h2>Header</h2>
				// <h5>Subheader</h5>}
			}
		</div>
	);
};

HeaderComponent.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	datatestid: PropTypes.string,
	id: PropTypes.string,
	isOpen: PropTypes.bool,
	image: PropTypes.string,
	name: PropTypes.string,
	onClick: PropTypes.func
};
