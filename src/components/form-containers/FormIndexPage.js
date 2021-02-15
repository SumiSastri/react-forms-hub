import React from 'react';

// import PostIndex from '../content-pages/PostIndex';
// import { UserAddressesForm } from '../form-containers/users/UserAddressesForm';
// import { EnquiryForm } from './enquiry-form/EnquiryForm';
import { HeaderComponent } from '../navbars/HeaderComponent';

import { Link } from 'react-router-dom';

// add links wrapper here
const FormIndexPage = () => {
	return (
		<div>
			<HeaderComponent
				datatestid="payroll-enquiry-header"
				name={'payroll-enquiry-header'}
				children={
					<ol>
						<Link to="/content/vanilla-react">
							<li>Content Filters (Vanilla-React)</li>
						</Link>
						<Link to="/forms/formik">
							<li>Formik Forms</li>
						</Link>
						<Link to="/forms/hooks">
							<li>Enquiry Form (Hooks)</li>
						</Link>
					</ol>
				}
			/>
			<br />
		</div>
	);
};
export default FormIndexPage;
