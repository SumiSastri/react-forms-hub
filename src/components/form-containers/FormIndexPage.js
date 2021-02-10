import React from 'react';

// import NavBarComponent from '../navbars/NavBarComponent';
// import PostIndex from '../content-pages/PostIndex';
// import { UserAddressesForm } from '../form-containers/users/UserAddressesForm';
// import FormFooter from '../navbars/formFooter';
import { EnquiryForm } from './enquiry-form/EnquiryForm';

const FormIndexPage = () => {
	return (
		<div>
			{/* <NavBarComponent />
			<PostIndex />
			<UserAddressesForm /> */}
			<EnquiryForm />
			{/* <FormFooter /> */}
		</div>
	);
};
export default FormIndexPage;
