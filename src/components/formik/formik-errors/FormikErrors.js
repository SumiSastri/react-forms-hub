import React from 'react';

// pass props and render the children of the props
export const FormikErrors = (props) => {
	return <div className="error">{props.children}</div>;
};

export default FormikErrors;
