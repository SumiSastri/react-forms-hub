import React, { Component } from 'react';
import ReactModal from 'react-modal';

import { PopUpModalComponent } from '../../modals/PopUpModalComponent';
import { FormInputComponent } from '../../input-fields/FormInputComponent';
import { ButtonComponent } from '../../buttons/ButtonComponent';

ReactModal.setAppElement('body');
export class RegistrationFormModal extends Component {
	constructor() {
		super();

		this.state = {
			data: {
				firstName: '',
				lastName: '',
				phone1: 123,
				email: '',
				password: '',
				modalIsOpen: false
			}
		};
		this.initialState = this.state;
	}

	// handleChange = (event) => {
	// 	this.setState({
	// 		firstName: event.target.value,
	// 		lastName: event.target.value,
	// 		phone1: event.target.value,
	// 		email: event.target.value,
	// 		password: event.target.value,

	// 	});
	// };

	// more efficient refactor - see login modal for another way to handle input changes
	handleChange = ({ target: { name, value } }) => {
		const data = { ...this.state.data, [name]: value };
		this.setState({ data });
	};

	// another variation to handling input changes
	// updateFormInputs = (key, value) => {
	// 	if (key === 'userName' || key === 'email' || key === 'password') {
	// 		this.setState({ error: null, [key]: value }, () => {
	// 			this.setState({
	// 				userName: this.state.userName,
	// 				email: this.state.email,
	// 				password: this.state.password
	// 			});
	// 		});
	// 	} else {
	// 		this.setState({ error: null, [key]: value });
	// 	}
	// };

	// this submit does not send the form to a back-end database
	handleFormSubmit = (event) => {
		event.preventDefault();
		console.log(
			` ${this.state.firstName} 
			${this.state.lastName} 
			${this.state.phone1} 
			${this.state.email} 
			${this.state.password}
		`
		);
	};
	// opens and closes modal
	openModal = () => {
		console.log('this is:', this);
		this.setState((state) => ({
			// set state to the opposite of false which is true
			modalIsOpen: !state.modalIsOpen
		}));
		console.log('openmodal:', this.state);
	};

	render() {
		const { firstName, lastName, phone1, email, password } = this.state;
		return (
			<section>
				<ButtonComponent
					className="btn-5"
					datatestid="btn-reg"
					label="Register"
					name="btn-reg"
					onClick={() => this.openModal()}
					type="button"
				/>
				<PopUpModalComponent
					isOpen={this.state.modalIsOpen}
					disableCloseOnOverlay={false}
					closeOnRequest={() => this.openModal(false)}
					children={
						<div>
							<form name="reg-form" id="reg-form" datatestid="reg-form" onSubmit={this.handleSubmit}>
								<div>
									<FormInputComponent
										className="inpt-1m"
										datatestid="reg-1stname"
										id="reg-1stname"
										required={true}
										type="text"
										label="First Name"
										placeholder="First Name"
										name="firstName"
										value={firstName}
										onChange={this.handleChange}
									/>
								</div>
								<br />
								<div>
									<FormInputComponent
										className="inpt-1m"
										datatestid="reg-lstname"
										id="reg-lstname"
										required={true}
										type="text"
										label="Last Name:"
										placeholder="Last Name"
										name="lastName"
										value={lastName}
										onChange={this.handleChange}
									/>
								</div>
								<br />
								<div>
									<FormInputComponent
										className="inpt-1m"
										datatestid="reg-ph1"
										id="reg-ph1"
										required={true}
										type="number"
										label="Phone number:"
										placeholder="Phone Number"
										name="phone"
										value={phone1}
										onChange={this.handleChange}
									/>
								</div>
								<br />
								<div>
									<FormInputComponent
										className="inpt-1m"
										datatestid="reg-email"
										id="reg-email"
										required={true}
										type="text"
										label="Email:"
										placeholder="Email"
										name="email"
										value={email}
										onChange={this.handleChange}
									/>
								</div>
								<br />
								<div>
									<FormInputComponent
										className="inpt-1m"
										datatestid="reg-passwd"
										id="reg-passwd"
										required={true}
										type="text"
										label="Password:"
										placeholder="Password"
										name="password"
										value={password}
										onChange={this.handleChange}
									/>
								</div>
								<br />
								<section>
									<ButtonComponent
										className="button-one"
										datatestid="btn-reg-submit"
										name="btn-reg-submit"
										onSubmit={() => this.handleSubmit}
										label="Submit"
										type="submit"
									/>
								</section>
							</form>
							<br />

							<ButtonComponent
								className="button-one"
								datatestid="mdl-reg-close"
								name="mdl-reg-close"
								onClick={() => this.openModal(false)}
								label="X"
								type="button"
							/>
						</div>
					}
				/>
			</section>
		);
	}
}
export default RegistrationFormModal;
