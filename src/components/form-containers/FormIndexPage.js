import React from 'react';

// import FormHeader from '../navbars/formHeader';
// import FormFooter from '../navbars/formFooter';
// import PostIndex from '../content-pages/PostIndex';
import { EnquiryForm } from './enquiry-form/EnquiryForm';

const FormIndexPage = () => {
	return (
		<div className="main-form-container">
			{/* <FormHeader />
			<PostIndex />
			<FormFooter /> */}
			<EnquiryForm />
		</div>
	);
};
export default FormIndexPage;
