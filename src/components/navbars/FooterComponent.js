import React from 'react';
import PropTypes from 'prop-types';

export const FooterComponent = ({ children, className, datatestid, id, image, name, onClick }) => {
	return (
		<div className={className} datatestid={datatestid} id={id} image={image} name={name} onClick={onClick}>
			{
				children
				// = {// <div>
				//     <img className={className} alt="logo" src={logo} />
				// </div>
				// <div>
				// <ul>
				//     <li>Some footer list item</li>
				//     <li>Some footer list item</li>
				//     </ul>
				// </div>}
			}
		</div>
	);
};

FooterComponent.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	datatestid: PropTypes.string,
	id: PropTypes.string,
	image: PropTypes.string,
	name: PropTypes.string,
	onClick: PropTypes.func
};
