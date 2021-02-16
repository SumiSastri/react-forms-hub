import React from 'react';

export const FormikErrors = (props) => {
	return <div className="error">{props.children}</div>;
};

export default FormikErrors;
