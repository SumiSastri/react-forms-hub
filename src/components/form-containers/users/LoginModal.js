import React, { Component } from 'react';
import ReactModal from 'react-modal';

import { FormInputComponent } from '../../input-fields/FormInputComponent';
import { PopUpModalComponent } from '../../modals/PopUpModalComponent';
import { ButtonComponent } from '../../buttons/ButtonComponent';

ReactModal.setAppElement('body');

export class LoginModal extends Component {
	constructor() {
		super();

		this.state = {
			userName: '',
			password: '',
			modalIsOpen: false
		};

		this.initialState = this.state;
	}

	updateFormInputs = (key, value) => {
		if (key === 'userName' || key === 'phoneNumber' || key === 'password') {
			this.setState({ error: null, [key]: value }, () => {
				this.setState({ userName: this.state.userName, password: this.state.password });
			});
		} else {
			this.setState({ error: null, [key]: value });
		}
	};
	postFormData = () => {
		this.setState({ error: null });
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			params: {
				userName: this.state.userName,
				userPassword: this.state.password
			}
		})
			.then(({ response }) => {
				if (200 <= response <= 299) {
					this.setState(this.initialState);
				}
			})
			.catch((e) => this.setState({ error: e }));
	};

	// handleFormSubmit = (event) => {
	//     event.preventDefault();
	//     alert(`Your details have been submitted for registration`)
	// }; this submit does not send the form to a back-end database

	openModal = () => {
		console.log('this is:', this);
		this.setState((state) => ({
			// set state to the opposite of false which is true
			modalIsOpen: !state.modalIsOpen
		}));
		console.log('openmodal:', this.state);
	};
	render() {
		return (
			<section>
				<ButtonComponent
					className="btn-5"
					datatestid="btn-login"
					label="Login"
					name="btn-login"
					onClick={() => this.openModal()}
					type="button"
				/>

				<PopUpModalComponent
					isOpen={this.state.modalIsOpen}
					disableCloseOnOverlay={false}
					closeOnRequest={() => this.openModal(false)}
					children={
						<div>
							<form onSubmit={() => this.postFormData}>
								<FormInputComponent
									className="inpt-1s"
									datatestid="usr-name"
									label="User Name"
									name="user name"
									placeholder="Your email-id is your username"
									required={false}
									type="text"
									value={this.state.userName}
									onChange={(event) => this.updateFormInputs('userName', event.target.value)}
								/>

								<FormInputComponent
									className="inpt-3s"
									datatestid="password"
									label="Password"
									name="password"
									placeholder="Use a mix of numbers, letters, symbols"
									required={true}
									type="password"
									value={this.state.password}
									onChange={(event) => this.updateFormInputs('password', event.target.value)}
								/>
								<div>
									<p>Forgotten username or password?</p>
								</div>
								<section>
									<ButtonComponent
										className="button-one"
										datatestid="btn-login-submit"
										name="btn-login-submit"
										onSubmit={() => this.postFormData}
										label="Submit"
										type="submit"
									/>
								</section>
							</form>
							<br />
							<ButtonComponent
								className="button-one"
								datatestid="mdl-login-reg-close"
								name="mdl-login-reg-close"
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

export default LoginModal;
