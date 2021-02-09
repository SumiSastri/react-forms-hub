import React from 'react';

import FormHeader from '../navbars/formHeader';
import PostIndex from '../content-pages/PostIndex';
// import FormFooter from '../navbars/formFooter';
import { EnquiryForm } from './enquiry-form/EnquiryForm';

const FormIndexPage = () => {
	return (
		<div>
			<FormHeader />
			<PostIndex />
			<EnquiryForm />
			{/* <FormFooter /> */}
		</div>
	);
};
export default FormIndexPage;
