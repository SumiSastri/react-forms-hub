import React from 'react';

import NavBarComponent from '../navbars/NavBarComponent';
import PostIndex from '../content-pages/PostIndex';
// import FormFooter from '../navbars/formFooter';
import { EnquiryForm } from './enquiry-form/EnquiryForm';

const FormIndexPage = () => {
	return (
		<div>
			<NavBarComponent />
			<PostIndex />
			<EnquiryForm />
			{/* <FormFooter /> */}
		</div>
	);
};
export default FormIndexPage;
