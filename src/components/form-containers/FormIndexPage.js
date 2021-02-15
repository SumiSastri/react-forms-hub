import React from 'react';

import NavBarComponent from '../navbars/NavBarComponent';
import PostIndex from '../content-pages/PostIndex';
import { UserAddressesForm } from '../form-containers/users/UserAddressesForm';
import FormFooter from '../navbars/formFooter';
import { EnquiryForm } from './enquiry-form/EnquiryForm';
import FormikFormsIndex from '../formik/FormikFormsIndex';

const FormIndexPage = () => {
	return (
		<div>
			<NavBarComponent />
			<PostIndex />
			<FormikFormsIndex />
			<UserAddressesForm />
			<EnquiryForm />
			<FormFooter />
		</div>
	);
};
export default FormIndexPage;
