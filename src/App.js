import React, { Fragment } from 'react';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PostIndex from './components/content-pages/PostIndex';
import FormikFormsIndex from './components/formik/FormikFormsIndex';
import EnquiryForm from './components/form-containers/enquiry-form/EnquiryForm';
import NavBarComponent from './components/navbars/NavBarComponent';
import FormIndexPage from './components/form-containers/FormIndexPage';
import './App.css';

Modal.setAppElement('#root');
function App() {
	return (
		<Router>
			<Switch>
				<Fragment>
					<div className="app-root">
						<NavBarComponent />
						<Route exact path="/" component={FormIndexPage} />
						<Route path="/content/vanilla-react" component={PostIndex} />
						<Route path="/forms/formik" component={FormikFormsIndex} />
						<Route path="/forms/hooks" component={EnquiryForm} />
					</div>
				</Fragment>
			</Switch>
		</Router>
	);
}
export default App;
